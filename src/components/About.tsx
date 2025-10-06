import { useTranslation } from 'react-i18next';

interface Feature {
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

function About() {
  const { t } = useTranslation();

  const features: Feature[] = [
    {
      icon: '🚀',
      titleKey: 'about.features.innovation.title',
      descriptionKey: 'about.features.innovation.description'
    },
    {
      icon: '🤝',
      titleKey: 'about.features.partnership.title',
      descriptionKey: 'about.features.partnership.description'
    },
    {
      icon: '⚡',
      titleKey: 'about.features.efficiency.title',
      descriptionKey: 'about.features.efficiency.description'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('about.title')}</h2>
        <p className="section-description">
          {t('about.description')}
        </p>
        <div className="features">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{t(feature.titleKey)}</h3>
              <p>{t(feature.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
