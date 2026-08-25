import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import '../styles/WhoWeAre.css';

const FOUNDERS = [
  { key: 'josue', name: 'Josué Us', href: 'https://www.linkedin.com/in/josueus/', photo: '/jos.jpg' },
  {
    key: 'jose',
    name: 'José Pablo Rodríguez',
    href: 'https://www.linkedin.com/in/pablo-rodr%C3%ADguez-pinz%C3%B3n/',
    photo: '/jp.jpg',
  },
] as const;

const TENET_KEYS = ['design', 'stateOfTheArt', 'unique'] as const;

function WhoWeAre() {
  const { t } = useTranslation();

  return (
    <section id="who-we-are" className="who-we-are">
      <div className="who-we-are-container">
        <div className="who-we-are-grid">
          <Reveal className="who-we-are-pin" x={0} y={16}>
            <div className="who-we-are-pin-float">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
                <defs>
                  <radialGradient id="who-we-are-map-fade" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="1" />
                    <stop offset="68%" stopColor="white" stopOpacity="1" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <mask id="who-we-are-map-mask">
                    <circle cx="110" cy="110" r="100" fill="url(#who-we-are-map-fade)" />
                  </mask>
                  <radialGradient id="who-we-are-pin-halo" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.16" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Abstracted from a real map of downtown Guatemala City: a
                    tilted grid (avenidas/calles run NNW-SSE, not true north)
                    plus the diagonal boulevards that break the grid and
                    converge on a traffic circle — masked into a soft-edged
                    medallion instead of a hard ring. */}
                <g mask="url(#who-we-are-map-mask)" stroke="white">
                  <g transform="rotate(-8 110 110)">
                    <line x1="14" y1="-20" x2="14" y2="240" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="32" y1="-20" x2="32" y2="240" strokeOpacity="0.14" strokeWidth="1" />
                    <line x1="50" y1="-20" x2="50" y2="240" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="68" y1="-20" x2="68" y2="240" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="86" y1="-20" x2="86" y2="240" strokeOpacity="0.14" strokeWidth="1" />
                    <line x1="104" y1="-20" x2="104" y2="240" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="122" y1="-20" x2="122" y2="240" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="140" y1="-20" x2="140" y2="240" strokeOpacity="0.14" strokeWidth="1" />
                    <line x1="158" y1="-20" x2="158" y2="240" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="176" y1="-20" x2="176" y2="240" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="194" y1="-20" x2="194" y2="240" strokeOpacity="0.14" strokeWidth="1" />

                    <line x1="-20" y1="14" x2="240" y2="14" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="-20" y1="32" x2="240" y2="32" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="-20" y1="50" x2="240" y2="50" strokeOpacity="0.14" strokeWidth="1" />
                    <line x1="-20" y1="68" x2="240" y2="68" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="-20" y1="86" x2="240" y2="86" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="-20" y1="104" x2="240" y2="104" strokeOpacity="0.14" strokeWidth="1" />
                    <line x1="-20" y1="122" x2="240" y2="122" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="-20" y1="140" x2="240" y2="140" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="-20" y1="158" x2="240" y2="158" strokeOpacity="0.14" strokeWidth="1" />
                    <line x1="-20" y1="176" x2="240" y2="176" strokeOpacity="0.09" strokeWidth="1" />
                    <line x1="-20" y1="194" x2="240" y2="194" strokeOpacity="0.09" strokeWidth="1" />
                  </g>

                  {/* Diagonal boulevards radiating from the traffic circle
                      the pin sits on — the star-shaped intersections that
                      break the grid, not a single straight cut-through. */}
                  <line x1="110" y1="99" x2="93" y2="5" strokeOpacity="0.28" strokeWidth="1.25" />
                  <line x1="110" y1="99" x2="164" y2="21" stroke="var(--blue-300)" strokeOpacity="0.55" strokeWidth="1.4" />
                  <line x1="110" y1="99" x2="204" y2="82" strokeOpacity="0.28" strokeWidth="1.25" />
                  <line x1="110" y1="99" x2="188" y2="153" strokeOpacity="0.24" strokeWidth="1.1" />
                  <line x1="110" y1="99" x2="126" y2="193" stroke="var(--blue-300)" strokeOpacity="0.55" strokeWidth="1.4" />
                  <line x1="110" y1="99" x2="21" y2="131" strokeOpacity="0.24" strokeWidth="1.1" />

                  {/* The small traffic circle itself, at the convergence */}
                  <circle cx="110" cy="99" r="13" strokeOpacity="0.4" strokeWidth="1" />
                </g>

                <circle cx="110" cy="99" r="34" fill="url(#who-we-are-pin-halo)" />
                <path
                  d="M110 70c-16.5 0-30 13.2-30 29.5 0 22 30 50.5 30 50.5s30-28.5 30-50.5c0-16.3-13.5-29.5-30-29.5z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <circle cx="110" cy="99" r="10" stroke="white" strokeWidth="1.5" />
              </svg>
            </div>
            <span className="who-we-are-coords">{t('whoWeAre.coordinates')}</span>
            <span className="who-we-are-city">{t('whoWeAre.city')}</span>
          </Reveal>

          <Reveal className="who-we-are-content" delay={0.1}>
            <span className="who-we-are-eyebrow">{t('whoWeAre.eyebrow')}</span>
            <h2 className="who-we-are-headline">{t('whoWeAre.headline')}</h2>
            <p className="who-we-are-body">{t('whoWeAre.body')}</p>

            <div className="who-we-are-tenets">
              {TENET_KEYS.map((key, i) => (
                <div key={key} className="who-we-are-tenet">
                  <span className="who-we-are-tenet-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{t(`whoWeAre.tenets.${key}.title`)}</h3>
                  <p>{t(`whoWeAre.tenets.${key}.description`)}</p>
                </div>
              ))}
            </div>

            <div className="who-we-are-founders">
              {FOUNDERS.map((founder) => (
                <div key={founder.key} className="who-we-are-founder">
                  <img className="who-we-are-founder-photo" src={founder.photo} alt="" />
                  <div>
                    <span className="who-we-are-founder-name">
                      <a href={founder.href} target="_blank" rel="noopener noreferrer">
                        {founder.name}
                      </a>
                    </span>
                    <span className="who-we-are-founder-role">{t('whoWeAre.founders.role')}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
