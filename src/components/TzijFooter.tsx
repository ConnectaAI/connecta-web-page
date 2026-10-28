import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { LEGAL_PATHS } from './LegalPage';
import { langFromPath, localizedPath } from '../lib/routes';
import { useDrawIn } from '../lib/useDrawIn';
import { RIDGES, RIDGES_BOX, RIDGE_SITE } from '../lib/tzijRidges';
import grain from '../assets/tzij-footer-grain.webp';
import '../styles/TzijFooter.css';

const { x, y, width, height } = RIDGES_BOX;
const LAST = RIDGES.length - 1;

// Footer of the Tzij page: same Connecta content, Tzij theme, with the
// highland elevation profiles as its base. The lines draw in the first time
// the illustration scrolls into view (see useDrawIn).
function TzijFooter() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const lng = langFromPath(pathname);
  const artRef = useDrawIn<HTMLDivElement>();

  return (
    <footer className="tzij-theme tzij-footer">
      <div className="tzij-footer-top">
        <div className="tzij-footer-brand">
          <Logo className="tzij-footer-logo" />
          <p className="tzij-footer-tagline">{t('footer.tagline')}</p>
          <p className="tzij-footer-madeIn">{t('footer.madeIn')}</p>
        </div>
        <nav className="tzij-footer-links" aria-label="Legal">
          <Link to={localizedPath(LEGAL_PATHS.privacy, lng)}>{t('footer.privacy')}</Link>
          <Link to={localizedPath(LEGAL_PATHS.terms, lng)}>{t('footer.terms')}</Link>
        </nav>
      </div>

      <div className="tzij-footer-art" ref={artRef}>
        <svg
          className="tzij-footer-svg"
          viewBox={`${x} ${y} ${width} ${height}`}
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <defs>
            <pattern id="tzij-footer-grain" width="256" height="256" patternUnits="userSpaceOnUse">
              <image href={grain} width="256" height="256" />
            </pattern>
          </defs>
          {[...RIDGES].reverse().map((ridge, k) => {
            const i = LAST - k;
            const depth = 1 - i / LAST; // 0 at the back, 1 at the front
            const closed = `${ridge.d} L${ridge.x1} 400 L${ridge.x0} 400Z`;
            return (
              <g key={i}>
                <path d={closed} className="tzij-ridge-fill" />
                {i < 16 && (
                  <path d={closed} fill="url(#tzij-footer-grain)" opacity={0.1 + 0.22 * depth} />
                )}
                <path
                  d={ridge.d}
                  transform="translate(0 7)"
                  className="tzij-ridge-shade"
                  stroke="url(#tzij-footer-grain)"
                  strokeOpacity={0.35 + 0.65 * depth}
                />
                <path
                  d={ridge.d}
                  className="tzij-ridge-line"
                  pathLength={1}
                  strokeOpacity={0.28 + 0.72 * depth}
                  strokeWidth={0.9 + 0.5 * depth}
                  style={{ animationDelay: `${k * 0.045}s` }}
                />
              </g>
            );
          })}
          <circle className="tzij-ridge-site-ring" cx={RIDGE_SITE.x} cy={RIDGE_SITE.y} r={9} />
          <circle className="tzij-ridge-site" cx={RIDGE_SITE.x} cy={RIDGE_SITE.y} r={4.5} />
        </svg>
      </div>

      <div className="tzij-footer-bottom">
        <div className="tzij-footer-bottom-inner">
          <span>&copy; 2026 Connecta. {t('footer.rights')}</span>
          <span className="tzij-footer-credit">{t('tzij.footer.credit')}</span>
        </div>
      </div>
    </footer>
  );
}

export default TzijFooter;
