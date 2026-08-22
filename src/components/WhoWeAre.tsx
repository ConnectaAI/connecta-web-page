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
                <circle cx="110" cy="110" r="95" stroke="rgba(255,255,255,0.18)" strokeDasharray="3 6" />
                <circle cx="110" cy="110" r="60" stroke="rgba(255,255,255,0.14)" strokeDasharray="2 5" />
                <line x1="110" y1="8" x2="110" y2="30" stroke="rgba(255,255,255,0.3)" />
                <line x1="110" y1="190" x2="110" y2="212" stroke="rgba(255,255,255,0.3)" />
                <line x1="8" y1="110" x2="30" y2="110" stroke="rgba(255,255,255,0.3)" />
                <line x1="190" y1="110" x2="212" y2="110" stroke="rgba(255,255,255,0.3)" />
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
