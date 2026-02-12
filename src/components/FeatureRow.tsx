import React from 'react';
import FeatureBadge from './FeatureBadge';

interface FeatureRowProps {
  badgeIcon: string;
  badgeText: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
  badgeIcon,
  badgeText,
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft = false,
}) => {
  return (
    <div className={`feature-row ${imageLeft ? 'feature-row-reverse' : ''}`}>
      <div className="feature-content">
        <FeatureBadge icon={badgeIcon} text={badgeText} />
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
      <div className="feature-image-container">
        <div className="feature-image-wrapper">
          <img src={imageSrc} alt={imageAlt} className="feature-image" />
        </div>
      </div>
    </div>
  );
};

export default FeatureRow;
