import { m, type Variants } from 'motion/react';

interface FeatureBadgeProps {
  index: number;
  text: string;
  variants?: Variants;
}

function FeatureBadge({ index, text, variants }: FeatureBadgeProps) {
  return (
    <m.div className="feature-badge" variants={variants}>
      <span className="feature-badge-index">{String(index).padStart(2, '0')}</span>
      <span className="feature-badge-text">{text}</span>
    </m.div>
  );
}

export default FeatureBadge;
