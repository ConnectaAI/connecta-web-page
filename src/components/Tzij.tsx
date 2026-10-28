import { Trans, useTranslation } from 'react-i18next';
import Contact from './Contact';
import Reveal from './Reveal';
import { RELIEF_BOX, RELIEF_LINES, RELIEF_SITE } from '../lib/tzijRelief';
import { RIDGES } from '../lib/tzijRidges';
import { useDrawIn } from '../lib/useDrawIn';
import grainUrl from '../assets/tzij-grain.webp';
import '../styles/Tzij.css';

const STAGE_KEYS = ['one', 'two', 'three', 'four'] as const;
const PRINCIPLE_KEYS = ['ownership', 'consent', 'benefit'] as const;

function Relief({ label }: { label: string }) {
  const { width, height } = RELIEF_BOX;
  return (
    <div className="tzij-map">
      <svg className="tzij-map-svg" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
        <rect className="tzij-map-frame" x={0.5} y={0.5} width={width - 1} height={height - 1} />
        {RELIEF_LINES.map((line, i) => (
          <path
            key={i}
            className={`tzij-line${line.major ? ' tzij-line-major' : ''}`}
            pathLength={1}
            style={{ animationDelay: `${0.15 + i * 0.09}s` }}
            d={line.d}
          />
        ))}
      </svg>
      <div
        className="tzij-pin"
        tabIndex={0}
        style={{ left: `${(RELIEF_SITE.x / width) * 100}%`, top: `${(RELIEF_SITE.y / height) * 100}%` }}
      >
        <span className="tzij-pin-ripple" aria-hidden="true" />
        <span className="tzij-pin-ripple tzij-pin-ripple-late" aria-hidden="true" />
        <span className="tzij-pin-ring" aria-hidden="true" />
        <span className="tzij-pin-dot" aria-hidden="true" />
        <span className="tzij-pin-leader" aria-hidden="true" />
        <span className="tzij-pin-label">{label}</span>
      </div>
    </div>
  );
}

// Roadmap profile: the front elevation profile of the footer art (15.03° N),
// cropped to a band. The four stages sit on it at fixed x, one per column.
const PROFILE = RIDGES[0];
const PROFILE_POINTS = PROFILE.d
  .slice(1)
  .split(' L')
  .map((pair) => pair.split(' ').map(Number) as [number, number]);
const PROFILE_VIEW = { y: 96, width: 1440, height: 200 } as const;
const STAGE_X = [14, 360, 720, 1080] as const;

function profileY(x: number) {
  for (let i = 1; i < PROFILE_POINTS.length; i += 1) {
    const [x0, y0] = PROFILE_POINTS[i - 1];
    const [x1, y1] = PROFILE_POINTS[i];
    if (x >= x0 && x <= x1) return x1 === x0 ? y0 : y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
  }
  return PROFILE_POINTS[PROFILE_POINTS.length - 1][1];
}

function Profile() {
  const bottom = PROFILE_VIEW.y + PROFILE_VIEW.height;
  const ref = useDrawIn<SVGSVGElement>(0.3);
  return (
    <svg
      ref={ref}
      className="tzij-profile"
      viewBox={`0 ${PROFILE_VIEW.y} ${PROFILE_VIEW.width} ${PROFILE_VIEW.height}`}
      aria-hidden="true"
    >
      <defs>
        <pattern id="tzij-profile-grain" width="256" height="256" patternUnits="userSpaceOnUse">
          <image href={grainUrl} width="256" height="256" />
        </pattern>
      </defs>
      <path
        d={`${PROFILE.d} L${PROFILE.x1} ${bottom} L${PROFILE.x0} ${bottom}Z`}
        fill="url(#tzij-profile-grain)"
        opacity={0.55}
      />
      <path className="tzij-profile-line" pathLength={1} d={PROFILE.d} />
      <g className="tzij-profile-pins">
        {STAGE_X.map((x, i) => {
          const y = profileY(x);
          return (
            <g key={x} className={i === 0 ? 'tzij-profile-pin tzij-profile-pin--current' : 'tzij-profile-pin'}>
              <line x1={x} y1={y} x2={x} y2={bottom} />
              {i === 0 && <circle className="tzij-profile-ring" cx={x} cy={y} r={13} />}
              <circle className="tzij-profile-dot" cx={x} cy={y} r={6.5} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function SectionLabel({ num, text }: { num: string; text: string }) {
  return (
    <div className="tzij-label">
      <span className="tzij-label-num tzij-cota">{num}</span>
      <span className="tzij-label-text">{text}</span>
    </div>
  );
}

function Tzij() {
  const { t } = useTranslation();
  const emphasis = { em: <em className="tzij-em" /> };
  const principlesRef = useDrawIn<HTMLDivElement>(0.2);

  return (
    <>
      <div className="tzij-theme tzij-page">
        <section id="home" className="tzij-hero">
          <div className="tzij-hero-stage">
            <h1 className="tzij-wordmark">Tzij</h1>
            <div className="tzij-hero-copy">
              <p className="tzij-hero-phrase">{t('tzij.hero.phrase')}</p>
              <p className="tzij-hero-meaning">{t('tzij.hero.meaning')}</p>
              <p className="tzij-hero-intro">{t('tzij.hero.intro')}</p>
            </div>
            <Relief label={t('tzij.hero.mapLabel')} />
            <p className="tzij-map-caption">{t('tzij.hero.mapCaption')}</p>
          </div>
        </section>

        <section className="tzij-why">
          <div className="tzij-container tzij-why-inner">
            <Reveal>
              <SectionLabel num="01" text={t('tzij.why.label')} />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="tzij-title tzij-title--statement">
                <Trans i18nKey="tzij.why.title" components={{ em: <em className="tzij-em tzij-under" />, strong: <strong /> }} />
              </h2>
            </Reveal>
            <Reveal className="tzij-why-text" delay={0.1}>
              <p className="tzij-text">{t('tzij.why.text')}</p>
            </Reveal>
          </div>
        </section>

        <section className="tzij-consortium">
          <div className="tzij-container">
            <Reveal className="tzij-section-head">
              <SectionLabel num="02" text={t('tzij.consortium.label')} />
              <div className="tzij-section-body">
                <h2 className="tzij-title">
                  <Trans i18nKey="tzij.consortium.title" components={emphasis} />
                </h2>
                <p className="tzij-text">{t('tzij.consortium.text')}</p>
              </div>
            </Reveal>

            <div className="tzij-principles" ref={principlesRef}>
              {PRINCIPLE_KEYS.map((key, i) => (
                <Reveal key={key} className="tzij-principle" delay={i * 0.08}>
                  <span className="tzij-principle-num">{`0${i + 1}`}</span>
                  <h3 className="tzij-principle-title">{t(`tzij.consortium.principles.${key}.title`)}</h3>
                  <p className="tzij-principle-text">{t(`tzij.consortium.principles.${key}.text`)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="tzij-roadmap">
          <div className="tzij-container">
            <Reveal className="tzij-section-head">
              <SectionLabel num="03" text={t('tzij.roadmap.label')} />
              <h2 className="tzij-title">
                <Trans i18nKey="tzij.roadmap.title" components={emphasis} />
              </h2>
            </Reveal>

            <div className="tzij-timeline">
              <Profile />
              <ol className="tzij-stages" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {STAGE_KEYS.map((key, i) => (
                  <li key={key} className={`tzij-stage-item${i === 0 ? ' tzij-stage-item--current' : ''}`}>
                    <span className="tzij-stage-marker" aria-hidden="true" />
                    <span className="tzij-stage-tag">{`${t('tzij.roadmap.stage')} 0${i + 1}`}</span>
                    <h3 className="tzij-stage-name">{t(`tzij.roadmap.stages.${key}`)}</h3>
                  </li>
                ))}
              </ol>
              <p className="tzij-profile-caption">{t('tzij.roadmap.caption')}</p>
            </div>
          </div>
        </section>
      </div>

      <Contact variant="tzij" />
    </>
  );
}

export default Tzij;
