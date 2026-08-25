import { useTranslation } from 'react-i18next';
import previewImage from '../assets/preview.png';
import '../styles/DesignPreview.css';

function DesignPreview() {
  const { t } = useTranslation();

  return (
    <div className="dp-page">
      {/* Bolder Fraunces-forward */}
      <section className="dp-variant dp-variant-3">
        <div className="dp-hero dp-hero-bold">
          <div className="dp-hero-bold-inner">
            <p className="dp-mono dp-bold-eyebrow">CONNECTA · {t('hero.badge').toUpperCase()}</p>
            <h1 className="dp-title dp-title-serif dp-title-bold">
              {t('hero.titleLine1')}
              <br />
              {t('hero.titleLine2')}
            </h1>
            <p className="dp-subtitle dp-subtitle-bold">{t('hero.subtitle')}</p>
            <div className="dp-buttons dp-buttons-bold">
              <a href="#" className="dp-btn dp-btn-light">
                {t('hero.cta')}
                <span className="dp-btn-arrow">→</span>
              </a>
              <a href="#" className="dp-btn dp-btn-outline-light">
                {t('hero.ctaSecondary')}
              </a>
            </div>
            <div className="dp-bold-stats dp-mono">
              <div className="dp-bold-stat">
                <span className="dp-bold-stat-value">5 min</span>
                <span className="dp-bold-stat-label">Setup</span>
              </div>
              <div className="dp-bold-stat">
                <span className="dp-bold-stat-value">100%</span>
                <span className="dp-bold-stat-label">{t('hero.feature1')}</span>
              </div>
            </div>
          </div>
          <div className="dp-bold-screenshot-wrapper">
            <div className="dp-bold-screenshot-glow" />
            <img
              src={previewImage}
              alt={t('preview.imageAlt')}
              className="dp-bold-screenshot"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default DesignPreview;
