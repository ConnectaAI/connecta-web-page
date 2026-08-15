import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import '../styles/WhatWeDo.css';

const ICONS: Record<string, ReactElement> = {
  software: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="8 6 2 12 8 18" />
      <polyline points="16 6 22 12 16 18" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.25" />
    </svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      <path d="M4 11.5v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="2.75" />
      <path d="M19.4 13.5a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V19.5a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H4.5a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 6.1 8.68a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H10.5a1.65 1.65 0 0 0 1-1.51V4.5a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c.36.7.9 1.16 1.51 1H19.5a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
};

const CHIP_COLORS: Record<string, { bg: string; fg: string }> = {
  software: { bg: 'var(--blue-50)', fg: 'var(--blue-600, #2563eb)' },
  ai: { bg: 'var(--lavender-300)', fg: 'var(--lavender-500)' },
  data: { bg: '#dcfce7', fg: '#16a34a' },
  automation: { bg: '#fef3c7', fg: '#f59e0b' },
};

const ITEMS = ['software', 'ai', 'data', 'automation'] as const;

function WhatWeDo() {
  const { t } = useTranslation();

  return (
    <section id="what-we-do" className="what-we-do">
      <div className="what-we-do-container">
        <Reveal className="what-we-do-header">
          <span className="what-we-do-label">{t('whatWeDo.label')}</span>
          <h2 className="what-we-do-title">{t('whatWeDo.title')}</h2>
          <p className="what-we-do-description">{t('whatWeDo.description')}</p>
        </Reveal>
        <div className="what-we-do-grid">
          {ITEMS.map((key, i) => (
            <Reveal key={key} delay={i * 0.06} className="what-we-do-card">
              <div
                className="what-we-do-icon-chip"
                style={{ background: CHIP_COLORS[key].bg, color: CHIP_COLORS[key].fg }}
              >
                {ICONS[key]}
              </div>
              <h3>{t(`whatWeDo.items.${key}.title`)}</h3>
              <p>{t(`whatWeDo.items.${key}.description`)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
