import { CSSProperties, MouseEvent, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { m, useInView, useReducedMotion, type Variants } from 'motion/react';
import Reveal from './Reveal';
import '../styles/WhatsAppAssistant.css';

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const ITEMS = ['answers', 'schedule', 'control'] as const;

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOutExpo } },
};

// Timeline of the conversation, in seconds from the moment the phone scrolls
// into view. `d` is when a bubble appears; `typing` is when the assistant's
// "typing" dots show up before its reply. Played once, by CSS (see
// WhatsAppAssistant.css) so the text is always in the prerendered HTML.
const TIMELINE = {
  m1: { d: 0.3 },
  m2: { typing: 0.9, d: 1.9 },
  m3: { d: 3.3 },
  m4: { typing: 3.9, d: 4.9 },
  handoff: { d: 6.1 },
  m5: { d: 6.7 },
} as const;

const delay = (seconds: number): CSSProperties =>
  ({ '--d': `${seconds}s` }) as CSSProperties;

function WhatsAppAssistant() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();
  const phoneRef = useRef<HTMLDivElement>(null);
  const inView = useInView(phoneRef, { once: true, margin: '0px 0px -25% 0px' });

  const scrollToContact = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const typingStyle = (seconds: number): CSSProperties =>
    ({ '--t': `${seconds}s` }) as CSSProperties;

  return (
    <section id="whatsapp" className="wa-section">
      <div className="wa-container">
        <Reveal className="wa-header">
          <p className="wa-kicker">
            <span className="wa-kicker-label">{t('whatsapp.eyebrow')}</span>
            <span className="wa-kicker-soon">{t('whatsapp.badge')}</span>
          </p>
          <h2 className="wa-title">{t('whatsapp.title')}</h2>
          <p className="wa-subtitle">{t('whatsapp.subtitle')}</p>
        </Reveal>

        <div className="wa-grid">
          <Reveal className="wa-stage" delay={0.1} y={24}>
            <div ref={phoneRef} className={`wa-phone${inView ? ' wa-play' : ''}`}>
              <div className="wa-phone-header">
                <div className="wa-phone-avatar" aria-hidden="true" />
                <div className="wa-phone-id">
                  <span className="wa-phone-name">{t('whatsapp.chat.header')}</span>
                  <span className="wa-phone-status">
                    <i className="wa-phone-dot" aria-hidden="true" />
                    <span className="wa-status-stack">
                      <span className="wa-status wa-status-ai" style={delay(TIMELINE.handoff.d)}>
                        {t('whatsapp.chat.status')}
                      </span>
                      <span className="wa-status wa-status-team" style={delay(TIMELINE.handoff.d)}>
                        {t('whatsapp.chat.statusTeam')}
                      </span>
                    </span>
                  </span>
                </div>
              </div>

              <div className="wa-thread">
                <div className="wa-row wa-row-in">
                  <div className="wa-bubble wa-bubble-in" style={delay(TIMELINE.m1.d)}>
                    {t('whatsapp.chat.m1')}
                  </div>
                </div>

                <div className="wa-row wa-row-out">
                  <span
                    className="wa-typing"
                    style={typingStyle(TIMELINE.m2.typing)}
                    aria-hidden="true"
                  >
                    <i /><i /><i />
                  </span>
                  <div className="wa-bubble wa-bubble-out" style={delay(TIMELINE.m2.d)}>
                    <span className="wa-bubble-from">{t('whatsapp.chat.ai')}</span>
                    {t('whatsapp.chat.m2')}
                  </div>
                </div>

                <div className="wa-row wa-row-in">
                  <div className="wa-bubble wa-bubble-in" style={delay(TIMELINE.m3.d)}>
                    {t('whatsapp.chat.m3')}
                  </div>
                </div>

                <div className="wa-row wa-row-out">
                  <span
                    className="wa-typing"
                    style={typingStyle(TIMELINE.m4.typing)}
                    aria-hidden="true"
                  >
                    <i /><i /><i />
                  </span>
                  <div className="wa-bubble wa-bubble-out" style={delay(TIMELINE.m4.d)}>
                    <span className="wa-bubble-from">{t('whatsapp.chat.ai')}</span>
                    {t('whatsapp.chat.m4')}
                  </div>
                </div>

                <div className="wa-handoff" style={delay(TIMELINE.handoff.d)}>
                  <span>{t('whatsapp.chat.handoff')}</span>
                </div>

                <div className="wa-row wa-row-out">
                  <div className="wa-bubble wa-bubble-team" style={delay(TIMELINE.m5.d)}>
                    <span className="wa-bubble-from">{t('whatsapp.chat.header')}</span>
                    {t('whatsapp.chat.m5')}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <m.div
            className="wa-side"
            initial={shouldReduceMotion ? false : 'hidden'}
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={listVariants}
          >
            {ITEMS.map((key, i) => (
              <m.div key={key} className="wa-card" variants={cardVariants}>
                <span className="wa-card-index">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="wa-card-title">{t(`whatsapp.items.${key}.title`)}</h3>
                  <p className="wa-card-text">{t(`whatsapp.items.${key}.description`)}</p>
                </div>
              </m.div>
            ))}

            <m.a
              href="#contact"
              className="wa-cta"
              onClick={scrollToContact}
              variants={cardVariants}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            >
              {t('hero.cta')}
              <span className="wa-cta-arrow" aria-hidden="true">→</span>
            </m.a>
          </m.div>
        </div>
      </div>
    </section>
  );
}

export default WhatsAppAssistant;
