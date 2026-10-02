export type Lang = 'es' | 'en';

export const SITE_URL = 'https://connectaia.com';
export const LANGS: Lang[] = ['es', 'en'];

// Spanish is the default language and lives at the root; English lives
// under /en. `indexable: false` pages would be served client-side only.
export const PAGES = [
  { path: '/', key: 'home', indexable: true },
  { path: '/medassistant', key: 'medassistant', indexable: true },
] as const;

export type Page = (typeof PAGES)[number];

function trimSlash(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
}

export function langFromPath(pathname: string): Lang {
  const p = trimSlash(pathname);
  return p === '/en' || p.startsWith('/en/') ? 'en' : 'es';
}

// '/en/medassistant/' -> '/medassistant'
export function stripLang(pathname: string): string {
  const p = trimSlash(pathname).replace(/^\/en(?=\/|$)/, '');
  return p || '/';
}

// ('/medassistant', 'en') -> '/en/medassistant'
export function localizedPath(pathname: string, lng: Lang): string {
  const base = stripLang(pathname);
  if (lng === 'es') return base;
  return base === '/' ? '/en' : `/en${base}`;
}

export function pageForPath(pathname: string): Page | undefined {
  const base = stripLang(pathname);
  return PAGES.find((p) => p.path === base);
}

// Absolute URL as served by GitHub Pages (directories get a trailing slash).
export function absoluteUrl(pathname: string, lng: Lang): string {
  const p = localizedPath(pathname, lng);
  return `${SITE_URL}${p === '/' ? '/' : `${p}/`}`;
}
