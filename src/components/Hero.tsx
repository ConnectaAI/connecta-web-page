import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import previewImage from '../assets/preview.png';
import '../styles/Hero.css';

function Hero() {
  const { t } = useTranslation();

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-badge">
          {t('hero.badge')}
        </div>
        <h1 className="hero-title">
          {t('hero.titleLine1')}
          <br />
          {t('hero.titleLine2')}
        </h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-buttons">
          <a href="https://form.typeform.com/to/JOG8UsAA" className="hero-btn hero-btn-primary" target="_blank" rel="noopener noreferrer">
            {t('hero.cta')}
            <span className="hero-btn-arrow">→</span>
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary" onClick={scrollToContact}>
            {t('hero.ctaSecondary')}
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">5 min</span>
            <span className="hero-stat-label">{t('hero.feature2')}</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">100%</span>
            <span className="hero-stat-label">{t('hero.feature1')}</span>
          </div>
        </div>
        <div className="hero-screenshot-wrapper">
          <div className="hero-screenshot-glow"></div>
          <img
            src={previewImage}
            alt={t('preview.imageAlt')}
            className="hero-screenshot"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
