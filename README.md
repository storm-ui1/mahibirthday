# Dreamy Birthday Website

A fully responsive birthday website built with React, Vite, TailwindCSS, Framer Motion, React Router `HashRouter`, and Lucide/React Icons. It is designed as a cinematic digital love letter with dreamy polaroid memories, sticky notes, a fake playlist, a handwritten letter page, and a final birthday screen.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

1. Rename the repository path in `vite.config.js`:

```js
base: "/YOUR_REPO_NAME/"
```

2. Install dependencies, including the deploy helper:

```bash
npm install
npm install gh-pages --save-dev
```

3. Deploy:

```bash
npm run deploy
```

The app uses `HashRouter`, so route refreshes work on GitHub Pages.

## Customize

- Edit memories, notes, playlist tracks, and the birthday letter in `src/data/siteData.js`.
- Replace placeholder SVG assets in `public/assets/` with real photos while keeping the same filenames, or update the paths in `siteData.js`.
- Keep paths relative through `import.meta.env.BASE_URL` for GitHub Pages compatibility.
