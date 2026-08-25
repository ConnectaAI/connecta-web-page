import { m, useReducedMotion, type Variants } from 'motion/react';
import FeatureBadge from './FeatureBadge';

interface FeatureRowProps {
  badgeText: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft?: boolean;
}

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const rowVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Text and image slide in from opposite sides, toward each other — direction
// follows the row's own layout (imageLeft / .feature-row-reverse).
function textVariants(imageLeft: boolean): Variants {
  return {
    hidden: { opacity: 0, x: imageLeft ? 24 : -24 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: easeOutExpo } },
  };
}

function imageVariants(imageLeft: boolean): Variants {
  return {
    hidden: { opacity: 0, x: imageLeft ? -24 : 24, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: easeOutExpo } },
  };
}

function FeatureRow({
  badgeText,
  title,
  description,
  imageSrc,
  imageAlt,
  imageLeft = false,
}: FeatureRowProps) {
  const shouldReduceMotion = useReducedMotion();
  const text = textVariants(imageLeft);
  const image = imageVariants(imageLeft);

  return (
    <m.div
      className={`feature-row ${imageLeft ? 'feature-row-reverse' : ''}`}
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={rowVariants}
    >
      <div className="feature-content">
        <FeatureBadge text={badgeText} variants={text} />
        <m.h3 className="feature-title" variants={text}>{title}</m.h3>
        <m.p className="feature-description" variants={text}>{description}</m.p>
      </div>
      <div className="feature-image-container">
        <m.div className="feature-image-wrapper" variants={image}>
          <img src={imageSrc} alt={imageAlt} className="feature-image" />
        </m.div>
      </div>
    </m.div>
  );
}

export default FeatureRow;
