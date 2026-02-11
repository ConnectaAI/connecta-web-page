import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
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
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              {t('hero.badge')}
            </div>
            <h1 className="hero-title">
              {t('hero.titleLine1')}<br/>
              <span className="hero-title-gradient">{t('hero.titleLine2')}</span>
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
            <div className="hero-features">
              <div className="hero-feature">
                <span className="hero-check">✓</span>
                <span>{t('hero.feature1')}</span>
              </div>
              <div className="hero-feature">
                <span className="hero-check">✓</span>
                <span>{t('hero.feature2')}</span>
              </div>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <div className="hero-image-container">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDCklsXhcl1ldIfXwo6M-f9cAH4kJjajEKjYGntVpGRYE8V0-J7tV_ySXs97iVbHn6WG3bu5H3S2-FZt1rTklLcWeLCV73HZ9bfCDE9FFHZn5Hbw5qeHFAWLVCJAz5ihekbHS77hy0tfB4BPFtkLagHlGgAn2pvjFNK6cZyyqvSbgoHTB_xkRU7p7O26QR418LjET2-gTz1HSYDSfncKSm3ldja_qtXpB6RgmDDQWiS8hd22xNoBc_BTnZ3kxf6jgIb8oQkfOJj7g"
                alt={t('hero.imageAlt')}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
