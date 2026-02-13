# ✨ Welcome to Your Spark Template!
You've just launched your brand-new Spark Template Codespace — everything’s fired up and ready for you to explore, build, and create with Spark!

This template is your blank canvas. It comes with a minimal setup to help you get started quickly with Spark development.
---

## 🌐 GitHub Pages Deployment

This project deploys automatically to **GitHub Pages** via GitHub Actions on every push to `main`.

**Live URL:** `https://dtmbx.github.io/informed-consent-com/`

### How it works

| Component | Detail |
|-----------|--------|
| Framework | Vite 7 + React 19 + TypeScript |
| Build output | `dist/` |
| Workflow | `.github/workflows/deploy-pages.yml` |
| Base path | `/informed-consent-com/` (set in `vite.config.ts` when `GITHUB_ACTIONS` env is present) |
| Jekyll | Disabled via `public/.nojekyll` |
| SPA fallback | `public/404.html` redirects unknown routes back to `index.html` |

### First-time setup (GitHub repo settings)

1. Go to **Settings → Pages** in the GitHub repository.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` — the workflow will build and deploy automatically.

### Local development

```bash
npm install
npm run dev        # Vite dev server at http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

### Improving CI speed

Commit a lockfile to enable dependency caching in CI:

```bash
npm install --package-lock-only
git add package-lock.json
git commit -m "chore: add lockfile for reproducible builds"
```

Then uncomment `cache: npm` in the workflow file.

### `@github/spark` dependency

This app was built with GitHub Spark. If `npm install` fails in CI because `@github/spark` is on the GitHub npm registry, uncomment the registry configuration step in the workflow and add a `SPARK_TOKEN` repository secret (a PAT with `read:packages` scope).

---
🚀 What's Inside?
- A clean, minimal Spark environment
- Pre-configured for local development
- Ready to scale with your ideas
  
🧠 What Can You Do?

Right now, this is just a starting point — the perfect place to begin building and testing your Spark applications.

🧹 Just Exploring?
No problem! If you were just checking things out and don’t need to keep this code:

- Simply delete your Spark.
- Everything will be cleaned up — no traces left behind.

📄 License For Spark Template Resources 

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.
