import React from 'react';

interface FeatureBadgeProps {
  icon: string;
  text: string;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ icon, text }) => {
  return (
    <div className="feature-badge">
      <span className="feature-badge-icon">{icon}</span>
      {text}
    </div>
  );
};

export default FeatureBadge;
