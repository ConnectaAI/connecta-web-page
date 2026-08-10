import React from 'react';

interface FeatureBadgeProps {
  text: string;
}

const FeatureBadge: React.FC<FeatureBadgeProps> = ({ text }) => {
  return (
    <div className="feature-badge">
      {text}
    </div>
  );
};

export default FeatureBadge;
