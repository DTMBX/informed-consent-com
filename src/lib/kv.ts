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

import { useState, useEffect, useCallback, useSyncExternalStore } from 'react'

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
  // Use useSyncExternalStore for tear-free reads
  const getSnapshot = useCallback(() => {
    const stored = readRaw<T>(key)
    return stored !== undefined ? stored : defaultValue
  }, [key, defaultValue])

  const subscribeStore = useCallback(
    (onStoreChange: () => void) => subscribe(key, onStoreChange),
    [key]
  )

  const value = useSyncExternalStore(subscribeStore, getSnapshot, getSnapshot)

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const current = readRaw<T>(key) ?? defaultValue
      const resolved = typeof next === 'function' ? (next as (prev: T) => T)(current) : next
      writeRaw(key, resolved)
      notify(key)
    },
    [key, defaultValue]
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
