import { useTranslation } from 'react-i18next';
import '../styles/Preview.css';
import previewImage from '../assets/preview.png';

function Preview() {
  const { t } = useTranslation();

  return (
    <section id="preview" className="preview-section">
      <div className="preview-container">
        <div className="preview-header">
          <h2 className="preview-title">{t('preview.title')}</h2>
          <p className="preview-description">
            {t('preview.description')}
          </p>
        </div>

        <div className="preview-mockup-wrapper">
          <div className="preview-gradient-left"></div>
          <div className="preview-gradient-right"></div>

          <img 
            src={previewImage} 
            alt={t('preview.imageAlt')} 
            className="preview-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Preview;
