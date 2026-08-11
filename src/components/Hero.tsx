import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { m, useReducedMotion, type Variants } from 'motion/react';
import previewImage from '../assets/preview.png';
import '../styles/Hero.css';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

// Above-the-fold, so this animates on mount (not whileInView) — keep
// delayChildren small so the title text isn't held back from paint.
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const screenshotVariants: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: 0.4, ease: easeOutExpo },
  },
};

function Hero() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('preview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <m.div
        className="hero-container"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={containerVariants}
      >
        <m.div className="hero-badge" variants={itemVariants}>
          {t('hero.badge')}
        </m.div>
        <m.h1 className="hero-title" variants={itemVariants}>
          {t('hero.titleLine1')}
          <br />
          {t('hero.titleLine2')}
        </m.h1>
        <m.p className="hero-subtitle" variants={itemVariants}>{t('hero.subtitle')}</m.p>
        <m.div className="hero-buttons" variants={itemVariants}>
          <a href="https://form.typeform.com/to/JOG8UsAA" className="hero-btn hero-btn-primary" target="_blank" rel="noopener noreferrer">
            {t('hero.cta')}
            <span className="hero-btn-arrow">→</span>
          </a>
          <a href="#contact" className="hero-btn hero-btn-secondary" onClick={scrollToContact}>
            {t('hero.ctaSecondary')}
          </a>
        </m.div>
        <m.div className="hero-stats" variants={itemVariants}>
          <div className="hero-stat">
            <span className="hero-stat-value">5 min</span>
            <span className="hero-stat-label">{t('hero.feature2')}</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">100%</span>
            <span className="hero-stat-label">{t('hero.feature1')}</span>
          </div>
        </m.div>
        <m.div className="hero-screenshot-wrapper" variants={screenshotVariants}>
          <div className="hero-screenshot-glow"></div>
          <img
            src={previewImage}
            alt={t('preview.imageAlt')}
            className="hero-screenshot"
          />
        </m.div>
      </m.div>
    </section>
  );
}

export default Hero;
