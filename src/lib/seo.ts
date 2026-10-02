import type { TFunction } from 'i18next';
import { LANGS, absoluteUrl, pageForPath, stripLang, type Lang } from './routes';

export interface HeadTag {
  tag: 'meta' | 'link';
  // Attributes that identify the tag, used to find and update it in place.
  match: Record<string, string>;
  attrs: Record<string, string>;
}

export interface PageSeo {
  title: string;
  tags: HeadTag[];
}

const OG_LOCALE: Record<Lang, string> = { es: 'es_GT', en: 'en_US' };

// Single source of truth for per-page head tags: the prerender script turns
// it into HTML, the client Seo component applies it on navigation.
export function seoFor(pathname: string, lng: Lang, t: TFunction): PageSeo {
  const page = pageForPath(pathname);

  if (!page || !page.indexable) {
    return {
      title: t('seo.home.title'),
      tags: [{ tag: 'meta', match: { name: 'robots' }, attrs: { content: 'noindex,nofollow' } }],
    };
  }

  const base = stripLang(pathname);
  const title = t(`seo.${page.key}.title`);
  const description = t(`seo.${page.key}.description`);
  const url = absoluteUrl(base, lng);

  const meta = (name: string, content: string): HeadTag => ({ tag: 'meta', match: { name }, attrs: { content } });
  const og = (property: string, content: string): HeadTag => ({ tag: 'meta', match: { property }, attrs: { content } });
  const alternate = (hreflang: string, href: string): HeadTag => ({
    tag: 'link',
    match: { rel: 'alternate', hreflang },
    attrs: { href },
  });

  return {
    title,
    tags: [
      meta('description', description),
      meta('robots', 'index,follow'),
      { tag: 'link', match: { rel: 'canonical' }, attrs: { href: url } },
      ...LANGS.map((l) => alternate(l, absoluteUrl(base, l))),
      alternate('x-default', absoluteUrl(base, 'es')),
      og('og:type', 'website'),
      og('og:site_name', 'Connecta'),
      og('og:title', title),
      og('og:description', description),
      og('og:url', url),
      og('og:locale', OG_LOCALE[lng]),
      meta('twitter:card', 'summary'),
      meta('twitter:title', title),
      meta('twitter:description', description),
    ],
  };
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function headToHtml({ title, tags }: PageSeo): string {
  const lines = [`<title>${escapeHtml(title)}</title>`];
  for (const { tag, match, attrs } of tags) {
    const all = Object.entries({ ...match, ...attrs })
      .map(([k, v]) => `${k}="${escapeHtml(v)}"`)
      .join(' ');
    lines.push(`<${tag} ${all} />`);
  }
  return lines.join('\n  ');
}

// Client-side counterpart of headToHtml: updates the tags already in <head>.
export function applyHead({ title, tags }: PageSeo): void {
  document.title = title;
  const managed = new Set<string>();

  for (const { tag, match, attrs } of tags) {
    const selector = tag + Object.entries(match).map(([k, v]) => `[${k}="${v}"]`).join('');
    managed.add(selector);
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement(tag);
      document.head.appendChild(el);
    }
    for (const [k, v] of Object.entries({ ...match, ...attrs })) el.setAttribute(k, v);
  }

  // Drop tags from the previous page that this one doesn't define
  // (e.g. canonical/hreflang when landing on a noindex route).
  document.head
    .querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang], meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]')
    .forEach((el) => {
      const selector =
        el.tagName.toLowerCase() +
        Array.from(el.attributes)
          .filter((a) => ['name', 'property', 'rel', 'hreflang'].includes(a.name))
          .map((a) => `[${a.name}="${a.value}"]`)
          .join('');
      if (!managed.has(selector)) el.remove();
    });
}
