import { MouseEvent as ReactMouseEvent, ReactElement, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReducedMotion } from 'motion/react';
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
  apps: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2.5" width="10" height="19" rx="2.25" />
      <line x1="10.5" y1="18" x2="13.5" y2="18" />
    </svg>
  ),
};

// Larger animated fine-line illustrations shown inside each service's detail
// panel — same visual vocabulary as ICONS above (thin strokes, dashed
// connector lines) scaled up, with a small idle loop of their own.
const PANEL_VISUALS: Record<string, ReactElement> = {
  software: (
    <svg viewBox="0 0 320 320" className="wwdi-web">
      <rect className="wwdi-web-frame" x="30" y="60" width="260" height="200" rx="10" />
      <line className="wwdi-web-divider" x1="30" y1="102" x2="290" y2="102" />
      <circle className="wwdi-web-dot" cx="50" cy="81" r="3.5" />
      <circle className="wwdi-web-dot" cx="63" cy="81" r="3.5" />
      <circle className="wwdi-web-dot" cx="76" cy="81" r="3.5" />
      <g className="wwdi-web-bracket">
        <polyline points="112 150 96 172 112 194" />
        <polyline points="150 150 166 172 150 194" />
      </g>
      <line className="wwdi-web-line wwdi-web-line-1" x1="185" y1="150" x2="245" y2="150" />
      <line className="wwdi-web-line wwdi-web-line-2" x1="185" y1="172" x2="255" y2="172" />
      <line className="wwdi-web-line wwdi-web-line-3" x1="185" y1="194" x2="220" y2="194" />
      <rect className="wwdi-web-cursor" x="222" y="188" width="9" height="13" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 320 320" className="wwdi-ai">
      <g className="wwdi-ai-spin">
        <circle className="wwdi-ai-ring" cx="160" cy="160" r="105" />
      </g>
      <circle className="wwdi-ai-ring wwdi-ai-ring-inner" cx="160" cy="160" r="60" />
      <g className="wwdi-ai-spoke">
        <line x1="160" y1="160" x2="160" y2="55" />
        <line x1="160" y1="160" x2="252" y2="107" />
        <line x1="160" y1="160" x2="252" y2="213" />
        <line x1="160" y1="160" x2="160" y2="265" />
        <line x1="160" y1="160" x2="68" y2="213" />
        <line x1="160" y1="160" x2="68" y2="107" />
      </g>
      <circle className="wwdi-ai-node wwdi-ai-n1" cx="160" cy="55" r="4.5" />
      <circle className="wwdi-ai-node wwdi-ai-n2" cx="252" cy="107" r="4.5" />
      <circle className="wwdi-ai-node wwdi-ai-n3" cx="252" cy="213" r="4.5" />
      <circle className="wwdi-ai-node wwdi-ai-n4" cx="160" cy="265" r="4.5" />
      <circle className="wwdi-ai-node wwdi-ai-n5" cx="68" cy="213" r="4.5" />
      <circle className="wwdi-ai-node wwdi-ai-n6" cx="68" cy="107" r="4.5" />
      <g className="wwdi-ai-core">
        <circle className="wwdi-ai-core-ring" cx="160" cy="160" r="26" />
        <path className="wwdi-ai-sparkle" d="M160 137v11M160 172v11M137 160h11M172 160h11M144.8 144.8l3.9 3.9M171.3 171.3l3.9 3.9M175.2 144.8l-3.9 3.9M148.7 171.3l-3.9 3.9" />
      </g>
    </svg>
  ),
  data: (
    <svg viewBox="0 0 320 320" className="wwdi-data">
      <line className="wwdi-data-axis" x1="55" y1="230" x2="265" y2="230" />
      <rect className="wwdi-data-bar wwdi-data-b1" x="65" y="150" width="26" height="80" rx="2" />
      <rect className="wwdi-data-bar wwdi-data-b2" x="107" y="110" width="26" height="120" rx="2" />
      <rect className="wwdi-data-bar wwdi-data-b3" x="149" y="170" width="26" height="60" rx="2" />
      <rect className="wwdi-data-bar wwdi-data-b4" x="191" y="90" width="26" height="140" rx="2" />
      <rect className="wwdi-data-bar wwdi-data-b5" x="233" y="130" width="26" height="100" rx="2" />
      <path className="wwdi-data-trend" d="M78 140 L120 95 L162 155 L204 70 L246 115" />
      <circle className="wwdi-data-marker wwdi-data-m1" cx="78" cy="140" r="4" />
      <circle className="wwdi-data-marker wwdi-data-m2" cx="120" cy="95" r="4" />
      <circle className="wwdi-data-marker wwdi-data-m3" cx="162" cy="155" r="4" />
      <circle className="wwdi-data-marker wwdi-data-m4" cx="204" cy="70" r="4" />
      <circle className="wwdi-data-marker wwdi-data-m5" cx="246" cy="115" r="4" />
    </svg>
  ),
  apps: (
    <svg viewBox="0 0 320 320" className="wwdi-apps">
      <rect className="wwdi-apps-frame" x="95" y="35" width="130" height="250" rx="16" />
      <line className="wwdi-apps-home" x1="140" y1="265" x2="180" y2="265" />
      <rect className="wwdi-apps-cell wwdi-apps-c1" x="112" y="65" width="34" height="34" rx="7" />
      <rect className="wwdi-apps-cell wwdi-apps-c2" x="154" y="65" width="34" height="34" rx="7" />
      <circle className="wwdi-apps-ring" cx="171" cy="82" r="21" />
      <rect className="wwdi-apps-cell wwdi-apps-c3" x="112" y="107" width="34" height="34" rx="7" />
      <rect className="wwdi-apps-cell wwdi-apps-c4" x="154" y="107" width="34" height="34" rx="7" />
      <rect className="wwdi-apps-cell wwdi-apps-c5" x="112" y="149" width="34" height="34" rx="7" />
      <rect className="wwdi-apps-cell wwdi-apps-c6" x="154" y="149" width="34" height="34" rx="7" />
    </svg>
  ),
};

const ITEMS = ['software', 'ai', 'data', 'apps'] as const;

// Scroll progress (0..1) across the pinned rail maps to: [0, 0.2) the intro
// morph (center "what we do?" label shrinking into a pinned header), then
// four equal 0.2-wide bands, one per capability.
const INTRO_BAND = 0.2;
const BAND = 0.2;

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

function WhatWeDo() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const railRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const rail = railRef.current;
    const header = headerRef.current;
    const orbit = orbitRef.current;
    const panelsWrap = panelsRef.current;
    const dotsWrap = dotsRef.current;
    if (!rail || !header || !orbit || !panelsWrap || !dotsWrap) return;

    let ticking = false;
    let lastActive = -1;

    const update = () => {
      ticking = false;
      const rect = rail.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rail.offsetHeight - vh;
      const scrolled = clamp(-rect.top, 0, total);
      const t = total > 0 ? scrolled / total : 0;

      const introT = clamp(t / INTRO_BAND, 0, 1);
      const baseFontRem = window.innerWidth < 640 ? 1.9 : 3;
      header.style.top = `${lerp(50, 16, introT)}%`;
      header.style.transform = `translate(-50%, ${introT < 1 ? '-50%' : '0%'})`;
      header.style.fontSize = `${lerp(baseFontRem, 1.15, introT)}rem`;
      header.style.letterSpacing = `${lerp(0, 0.08, introT)}em`;
      header.style.color = introT > 0.7 ? 'var(--blue-300)' : '#ffffff';
      header.style.textTransform = introT > 0.7 ? 'uppercase' : 'none';

      const orbitOpacity = clamp(1 - introT * 1.3, 0, 1);
      orbit.style.opacity = String(orbitOpacity);
      // Keep the invisible orbit buttons out of tab order once they've faded.
      orbit.style.pointerEvents = orbitOpacity < 0.05 ? 'none' : 'auto';

      const panelsOpacity = clamp((t - (INTRO_BAND - 0.06)) / 0.06, 0, 1);
      panelsWrap.style.opacity = String(panelsOpacity);
      dotsWrap.style.opacity = String(panelsOpacity);
      dotsWrap.style.pointerEvents = panelsOpacity < 0.05 ? 'none' : 'auto';

      const idx = t < INTRO_BAND ? 0 : Math.min(ITEMS.length, Math.floor((t - INTRO_BAND) / BAND) + 1);
      if (idx !== lastActive) {
        lastActive = idx;
        setActiveIndex(idx);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [shouldReduceMotion]);

  // Jumps the page so the given capability's panel becomes the active one —
  // used by both the idle orbit labels and the in-detail dots, so clicking a
  // service's name always scrolls straight to its info.
  const scrollToItem = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;

    const vh = window.innerHeight;
    const total = rail.offsetHeight - vh;
    const railTop = rail.getBoundingClientRect().top + window.scrollY;
    const targetT = INTRO_BAND + index * BAND + BAND / 2;

    window.scrollTo({ top: railTop + total * targetT, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  // The icon nudges itself away from the pointer as it approaches, rather
  // than growing — a small shy/magnetic-repel offset, capped so it never
  // drifts far from its floating position.
  const REPEL_DISTANCE = 16;

  const handleVisualPointerMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const svg = e.currentTarget.querySelector('svg');
    if (!svg) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(dx, dy) || 1;

    (svg as SVGSVGElement).style.transform =
      `translate(${(-dx / dist) * REPEL_DISTANCE}px, ${(-dy / dist) * REPEL_DISTANCE}px)`;
  };

  const handleVisualPointerLeave = (e: ReactMouseEvent<HTMLDivElement>) => {
    const svg = e.currentTarget.querySelector('svg');
    if (svg) (svg as SVGSVGElement).style.transform = 'translate(0, 0)';
  };

  if (shouldReduceMotion) {
    return (
      <section id="what-we-do" className="what-we-do what-we-do-static">
        <div className="what-we-do-static-container">
          <span className="what-we-do-static-eyebrow">{t('whatWeDo.question')}</span>
          <div className="what-we-do-static-list">
            {ITEMS.map((key, i) => (
              <div key={key} className="what-we-do-static-item">
                <span className="what-we-do-static-idx">{String(i + 1).padStart(2, '0')}</span>
                <div className="what-we-do-icon-chip">{ICONS[key]}</div>
                <h3>{t(`whatWeDo.items.${key}.title`)}</h3>
                <p>{t(`whatWeDo.items.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="what-we-do" className="what-we-do">
      <div className="what-we-do-rail" ref={railRef}>
        <div className="what-we-do-sticky">
          <div className="what-we-do-header" ref={headerRef}>
            {t('whatWeDo.question')}
          </div>

          <div className="what-we-do-orbit" ref={orbitRef}>
            <div className="what-we-do-orbit-ring" aria-hidden="true" />
            <svg className="what-we-do-orbit-lines" viewBox="0 0 640 640" fill="none" aria-hidden="true">
              <line x1="320" y1="320" x2="320" y2="95" stroke="rgba(255,255,255,0.35)" strokeDasharray="3 5" />
              <line x1="320" y1="320" x2="545" y2="320" stroke="rgba(255,255,255,0.35)" strokeDasharray="3 5" />
              <line x1="320" y1="320" x2="320" y2="545" stroke="rgba(255,255,255,0.35)" strokeDasharray="3 5" />
              <line x1="320" y1="320" x2="95" y2="320" stroke="rgba(255,255,255,0.35)" strokeDasharray="3 5" />
            </svg>
            {ITEMS.map((key, i) => (
              <button
                key={key}
                type="button"
                className={`what-we-do-node what-we-do-node-${i}`}
                onClick={() => scrollToItem(i)}
              >
                {t(`whatWeDo.items.${key}.title`)}
                <span>{String(i + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>

          <div className="what-we-do-panels" ref={panelsRef}>
            {ITEMS.map((key, i) => (
              <div key={key} className={`what-we-do-panel${activeIndex === i + 1 ? ' active' : ''}`}>
                <div
                  className="what-we-do-panel-visual"
                  aria-hidden="true"
                  onMouseMove={handleVisualPointerMove}
                  onMouseLeave={handleVisualPointerLeave}
                >
                  <div className="what-we-do-panel-visual-float">
                    {PANEL_VISUALS[key]}
                  </div>
                </div>
                <span className="what-we-do-panel-idx">
                  {String(i + 1).padStart(2, '0')} / {String(ITEMS.length).padStart(2, '0')}
                </span>
                <h3>{t(`whatWeDo.items.${key}.title`)}</h3>
                <p>{t(`whatWeDo.items.${key}.description`)}</p>
              </div>
            ))}
          </div>

          <div className="what-we-do-dots" ref={dotsRef}>
            {ITEMS.map((key, i) => (
              <button
                key={key}
                type="button"
                className={`what-we-do-dot${activeIndex === i + 1 ? ' active' : ''}`}
                onClick={() => scrollToItem(i)}
              >
                <i />
                <span>{t(`whatWeDo.items.${key}.title`)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
