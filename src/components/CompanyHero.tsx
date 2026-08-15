import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { m, useReducedMotion, type Variants } from 'motion/react';
import Logo from './Logo';
import '../styles/CompanyHero.css';

const wordmarkVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18, delay: 0.15 },
  },
};

const TICKER_KEYS = ['software', 'ai', 'data', 'automation'] as const;

function CompanyHero() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const tickerItems = shouldReduceMotion ? TICKER_KEYS : [...TICKER_KEYS, ...TICKER_KEYS];

  const scrollToNext = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('what-we-do');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="company-hero" data-navbar-theme="light">
      <div className="company-hero-glow" aria-hidden="true" />
      <div className="company-hero-frame" aria-hidden="true">
        <span className="company-hero-frame-mark company-hero-frame-mark-tl">+</span>
        <span className="company-hero-frame-mark company-hero-frame-mark-tr">+</span>
        <span className="company-hero-frame-mark company-hero-frame-mark-bl">+</span>
        <span className="company-hero-frame-mark company-hero-frame-mark-br">+</span>
      </div>

      <div className="company-hero-ticker" aria-hidden="true">
        <div className={`company-hero-ticker-track${shouldReduceMotion ? ' company-hero-ticker-track-static' : ''}`}>
          {tickerItems.map((key, i) => (
            <span key={i} className="company-hero-ticker-item">
              {t(`whatWeDo.items.${key}.title`)}
              <span className="company-hero-ticker-dot">/</span>
            </span>
          ))}
        </div>
      </div>

      <m.div
        className="company-hero-wordmark"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
        variants={wordmarkVariants}
      >
        <Logo className="company-hero-wordmark-logo" />
        <p className="company-hero-wordmark-caption">
          {t('companyHero.corner')} — {t('companyHero.year')}
        </p>
      </m.div>

      <a href="#what-we-do" className="company-hero-scroll-cue" onClick={scrollToNext}>
        <span className="company-hero-scroll-cue-label">{t('companyHero.scrollCue')}</span>
        <span
          className={`company-hero-scroll-cue-arrow${shouldReduceMotion ? '' : ' company-hero-scroll-cue-arrow-animated'}`}
          aria-hidden="true"
        >
          ↓
        </span>
      </a>
    </section>
  );
}

export default CompanyHero;
