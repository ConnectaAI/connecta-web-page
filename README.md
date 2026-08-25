# Connecta Web Page

Marketing site for Connecta, built with React, TypeScript, and Vite.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Deployment

The site is published via GitHub Pages, served from the `gh-pages` branch at
the custom domain `connectaia.com`.

To deploy the current `main` branch:

```bash
npm run deploy
```

This runs `npm run build` and pushes the contents of `dist/` to the
`gh-pages` branch (via the `gh-pages` npm package), which GitHub Pages
serves automatically. There's no need to switch branches or push manually —
`main` stays the source branch, `gh-pages` stays the built output.

GitHub Pages settings (Settings → Pages) must have the source branch set to
`gh-pages` and the custom domain set to `connectaia.com`.
