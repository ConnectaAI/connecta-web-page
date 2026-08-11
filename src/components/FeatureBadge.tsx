import { m, type Variants } from 'motion/react';

interface FeatureBadgeProps {
  text: string;
  variants?: Variants;
}

function FeatureBadge({ text, variants }: FeatureBadgeProps) {
  return (
    <m.div className="feature-badge" variants={variants}>
      {text}
    </m.div>
  );
}

export default FeatureBadge;
