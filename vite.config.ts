import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, PluginOption } from "vite";
import { resolve } from 'path'

// Spark plugins are optional — only loaded when @github/spark is installed
// (e.g., in a GitHub Spark Codespace). Build works without them.
let sparkPlugins: PluginOption[] = []
try {
  const { default: sparkPlugin } = await import("@github/spark/spark-vite-plugin")
  const { default: createIconImportProxy } = await import("@github/spark/vitePhosphorIconProxyPlugin")
  sparkPlugins = [
    createIconImportProxy() as PluginOption,
    sparkPlugin() as PluginOption,
  ]
} catch {
  // @github/spark not installed — running in standalone mode
}

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves from /<repo-name>/; local dev uses /
  base: process.env.GITHUB_ACTIONS
    ? '/informed-consent-com/'
    : '/',
  plugins: [
    react(),
    tailwindcss(),
    ...sparkPlugins,
  ],
  resolve: {
    alias: {
      '@': resolve(projectRoot, 'src')
    }
  },
});
