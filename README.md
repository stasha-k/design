# UX Designer Portfolio Website

A React + Vite portfolio site.

## Running locally

This is a React/TypeScript project built with [Vite](https://vitejs.dev), not a plain HTML site — so the VS Code **Live Server** extension won't work here (it only serves static files and can't compile TSX or resolve npm packages). Use Vite's own dev server instead, which does the same live-reload job (and adds instant Hot Module Replacement on top):

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Building for production

```bash
npm run build
```

Outputs a static site to `dist/`, which you can preview locally with `npm run preview`.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on every push to `main`.

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the Actions tab) — the site will be published at `https://<your-username>.github.io/<repo-name>/`.

Routing uses `HashRouter` and Vite's `base: './'` setting so the app works correctly regardless of the repository name or subpath, with no extra configuration needed.
