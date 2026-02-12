import React from 'react';
import { useTranslation } from 'react-i18next';
import FeatureRow from './FeatureRow';
import '../styles/Features.css';

import feature01 from '../assets/01_features.png';
import feature02 from '../assets/02_features.png';
import feature03 from '../assets/03_features.png';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const featuresData = [
    {
      badgeIcon: '✉️',
      badgeText: t('features.items.visitSummaries.badge'),
      title: t('features.items.visitSummaries.title'),
      description: t('features.items.visitSummaries.description'),
      imageSrc: feature01,
      imageAlt: t('features.items.visitSummaries.imageAlt'),
      imageLeft: false,
    },
    {
      badgeIcon: '🔍',
      badgeText: t('features.items.profileAccess.badge'),
      title: t('features.items.profileAccess.title'),
      description: t('features.items.profileAccess.description'),
      imageSrc: feature02,
      imageAlt: t('features.items.profileAccess.imageAlt'),
      imageLeft: true,
    },
    {
      badgeIcon: '💳',
      badgeText: t('features.items.paymentManagement.badge'),
      title: t('features.items.paymentManagement.title'),
      description: t('features.items.paymentManagement.description'),
      imageSrc: feature03,
      imageAlt: t('features.items.paymentManagement.imageAlt'),
      imageLeft: false,
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <FeatureRow
            key={index}
            badgeIcon={feature.badgeIcon}
            badgeText={feature.badgeText}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            imageAlt={feature.imageAlt}
            imageLeft={feature.imageLeft}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
