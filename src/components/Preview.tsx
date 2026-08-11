import { useTranslation } from 'react-i18next';
import '../styles/Preview.css';
import previewImage from '../assets/preview.png';
import Reveal from './Reveal';

function Preview() {
  const { t } = useTranslation();

  return (
    <section id="preview" className="preview-section">
      <div className="preview-container">
        <Reveal className="preview-header">
          <h2 className="preview-title">{t('preview.title')}</h2>
          <p className="preview-description">
            {t('preview.description')}
          </p>
        </Reveal>

        <Reveal className="preview-mockup-wrapper" delay={0.15} scale={0.96}>
          <div className="preview-gradient-left"></div>
          <div className="preview-gradient-right"></div>

          <img
            src={previewImage}
            alt={t('preview.imageAlt')}
            className="preview-image"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Preview;
