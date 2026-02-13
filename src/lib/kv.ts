/**
 * ── Platform-agnostic Key-Value storage layer ──────────────────────
 *
 * Drop-in replacement for @github/spark's KV hooks and imperative API.
 * Uses localStorage so the app works on any static host (GitHub Pages,
 * Netlify, Vercel, Capacitor/Cordova, Electron, etc.).
 *
 * Provides:
 *  1. useKV<T>(key, default) — React hook (same signature as Spark's)
 *  2. kv.get / kv.set / kv.delete — imperative async API
 *     (mounted on window.spark.kv for backward compat)
 *
 * Data is JSON-serialized in localStorage under the prefix "kv:".
 * A cross-tab StorageEvent listener keeps multiple tabs in sync.
 */

import { useCallback, useRef, useSyncExternalStore } from 'react'

// ── Internal helpers ────────────────────────────────────────────────

const PREFIX = 'kv:'

function storageKey(key: string) {
  return `${PREFIX}${key}`
}

function readRaw<T>(key: string): T | undefined {
  try {
    const raw = localStorage.getItem(storageKey(key))
    return raw !== null ? (JSON.parse(raw) as T) : undefined
  } catch {
    return undefined
  }
}

function writeRaw<T>(key: string, value: T): void {
  localStorage.setItem(storageKey(key), JSON.stringify(value))
}

function deleteRaw(key: string): void {
  localStorage.removeItem(storageKey(key))
}

// ── Snapshot cache (useSyncExternalStore demands referential stability) ─
//    getSnapshot MUST return the exact same reference if underlying data
//    hasn't changed, otherwise React triggers infinite re-renders.

const snapshotCache = new Map<string, { raw: string | null; value: unknown }>()

function readCached<T>(key: string, fallback: T): T {
  const sKey = storageKey(key)
  const raw = localStorage.getItem(sKey)
  const cached = snapshotCache.get(key)
  if (cached && cached.raw === raw) {
    return cached.value as T
  }
  const value: T = raw !== null ? (JSON.parse(raw) as T) : fallback
  snapshotCache.set(key, { raw, value })
  return value
}

// ── Subscriber bus (cross-component + cross-tab reactivity) ────────

type Listener = () => void
const listeners = new Map<string, Set<Listener>>()

function subscribe(key: string, cb: Listener): () => void {
  if (!listeners.has(key)) listeners.set(key, new Set())
  listeners.get(key)!.add(cb)
  return () => { listeners.get(key)?.delete(cb) }
}

function notify(key: string) {
  listeners.get(key)?.forEach(cb => cb())
}

// Cross-tab sync
if (typeof window !== 'undefined') {
  window.addEventListener('storage', (e) => {
    if (e.key?.startsWith(PREFIX)) {
      notify(e.key.slice(PREFIX.length))
    }
  })
}

// ── useKV hook ──────────────────────────────────────────────────────

/**
 * React hook that mirrors @github/spark's `useKV`.
 * Returns `[value, setValue]` — reactive across components and tabs.
 */
export function useKV<T>(key: string, defaultValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  // Stabilise defaultValue so object-literal callers don't bust useCallback
  const defaultRef = useRef(defaultValue)

  const getSnapshot = useCallback(
    () => readCached<T>(key, defaultRef.current),
    [key]
  )

  const subscribeStore = useCallback(
    (onStoreChange: () => void) => subscribe(key, onStoreChange),
    [key]
  )

  const value = useSyncExternalStore(subscribeStore, getSnapshot, getSnapshot)

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const current = readCached<T>(key, defaultRef.current)
      const resolved = typeof next === 'function' ? (next as (prev: T) => T)(current) : next
      // Write and eagerly update cache so the next getSnapshot sees stable ref
      const raw = JSON.stringify(resolved)
      localStorage.setItem(storageKey(key), raw)
      snapshotCache.set(key, { raw, value: resolved })
      notify(key)
    },
    [key]
  )

  return [value, setValue]
}

// ── Imperative KV API (backward-compatible with window.spark.kv) ───

export const kv = {
  async get<T>(key: string): Promise<T | undefined> {
    return readRaw<T>(key)
  },
  async set<T>(key: string, value: T): Promise<void> {
    writeRaw(key, value)
    notify(key)
  },
  async delete(key: string): Promise<void> {
    deleteRaw(key)
    notify(key)
  },
}

// ── Mount on window.spark for backward compat with imperative calls ─

declare global {
  interface Window {
    spark: {
      kv: typeof kv
    }
  }
}

if (typeof window !== 'undefined') {
  window.spark = window.spark || {} as any
  window.spark.kv = kv
}
