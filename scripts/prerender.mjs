// Pre-renders every indexable route in both languages into static HTML so
// GitHub Pages serves real pages (HTTP 200) with content and per-page meta.
// Runs after `vite build` (client) and `vite build --ssr` (dist/server).
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const SITE_URL = 'https://connectaia.com';

const { render, shellHead, PAGES, urlFor } = await import(
  pathToFileURL(join(dist, 'server/entry-server.js')).href
);
const template = await readFile(join(dist, 'index.html'), 'utf8');

const fill = (html, head, lng) =>
  template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html)
    .replace(/<html lang="[^"]*"/, `<html lang="${lng}"`);

const urls = [];
for (const page of PAGES.filter((p) => p.indexable)) {
  for (const lng of ['es', 'en']) {
    const path = urlFor(page.path, lng);
    const { html, head } = render(path);
    const file = join(dist, path === '/' ? '' : path, 'index.html');
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, fill(html, head, lng));
    urls.push({ page, lng });
    console.log(`prerendered ${path === '/' ? '/' : path + '/'}`);
  }
}

// Shell for unknown routes and client-only pages (/design-preview).
await writeFile(join(dist, '404.html'), fill('', shellHead(), 'es'));

const loc = (path, lng) => {
  const p = urlFor(path, lng);
  return `${SITE_URL}${p === '/' ? '/' : p + '/'}`;
};
const entries = urls
  .map(({ page, lng }) => {
    const alts = ['es', 'en']
      .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${loc(page.path, l)}" />`)
      .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(page.path, 'es')}" />`)
      .join('\n');
    return `  <url>\n    <loc>${loc(page.path, lng)}</loc>\n${alts}\n  </url>`;
  })
  .join('\n');
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries}\n</urlset>\n`,
);

await rm(join(dist, 'server'), { recursive: true, force: true });
