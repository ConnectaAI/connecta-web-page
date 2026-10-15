import { Fragment, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LEGAL, type Block } from '../content/legal';
import { langFromPath, localizedPath, type Lang } from '../lib/routes';
import '../styles/Legal.css';

export type LegalKind = 'privacy' | 'terms';

// Routes of the legal pages (Spanish slugs; English is served under /en).
export const LEGAL_PATHS: Record<LegalKind, string> = {
  privacy: '/privacidad',
  terms: '/terminos',
};

const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

// Renders the small inline markup used in src/content/legal.ts as real React
// nodes (no dangerouslySetInnerHTML).
function renderInline(text: string, lng: Lang): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let i = 0;
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = i++;
    if (m[1] !== undefined) {
      out.push(<strong key={key}>{m[1]}</strong>);
    } else {
      const [target, hash] = m[3].split('#');
      if (target === 'privacy' || target === 'terms') {
        out.push(
          <Link key={key} to={`${localizedPath(LEGAL_PATHS[target], lng)}${hash ? `#${hash}` : ''}`}>
            {m[2]}
          </Link>,
        );
      } else {
        const external = m[3].startsWith('http');
        out.push(
          <a key={key} href={m[3]} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {m[2]}
          </a>,
        );
      }
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out.map((n, k) => <Fragment key={k}>{n}</Fragment>);
}

function renderBlock(block: Block, lng: Lang, key: number) {
  if ('p' in block) return <p key={key}>{renderInline(block.p, lng)}</p>;
  if ('ul' in block) {
    return (
      <ul key={key}>
        {block.ul.map((item, i) => (
          <li key={i}>{renderInline(item, lng)}</li>
        ))}
      </ul>
    );
  }
  const { head, rows } = block.table;
  return (
    <div className="legal-table-wrap" key={key}>
      <table>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a}>
              <th scope="row">{a}</th>
              <td>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LegalPage({ kind }: { kind: LegalKind }) {
  const { pathname } = useLocation();
  const lng = langFromPath(pathname);
  const copy = LEGAL[lng];
  const doc = copy[kind];

  return (
    <main className="legal">
      <article className="legal-container">
        <h1>{doc.title}</h1>
        <p className="legal-updated">
          {copy.updatedLabel}: {copy.updated}
        </p>
        {copy.translationNote && <p className="legal-note">{copy.translationNote}</p>}
        <p>{renderInline(doc.intro, lng)}</p>
        {doc.sections.map((s) => (
          <section key={s.id} id={s.id}>
            <h2>{s.title}</h2>
            {s.blocks.map((b, i) => renderBlock(b, lng, i))}
          </section>
        ))}
      </article>
    </main>
  );
}

export default LegalPage;
