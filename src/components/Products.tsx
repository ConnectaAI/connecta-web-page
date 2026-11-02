import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { localizedPath } from '../lib/routes';
import dashboardImage from '../assets/dashboard.jpg';
import '../styles/Products.css';
import '../styles/Tzij.css';

function Products() {
  const { t, i18n } = useTranslation();

  return (
    <section id="products" className="products">
      <div className="products-container">
        <Reveal className="products-header">
          <h2 className="products-title">{t('products.title')}</h2>
        </Reveal>

        <Reveal delay={0.1} className="product-feature">
          <span className="product-feature-badge">{t('products.medassistant.badge')}</span>
          <h3 className="product-feature-huge">{t('products.medassistant.title')}</h3>
          <p className="product-feature-sub">{t('products.medassistant.description')}</p>
          <Link to={localizedPath('/medassistant', i18n.language === 'en' ? 'en' : 'es')} className="product-feature-link">
            {t('products.medassistant.cta')}
            <span className="product-feature-link-arrow">→</span>
          </Link>

          <div className="product-feature-backdrop" aria-hidden="true">
            <div className="product-feature-float">
              <img src={dashboardImage} alt="" className="product-feature-image" />
            </div>
            <span className="product-feature-caption">{t('products.medassistant.mockupCaption')}</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link to={localizedPath('/tzij', i18n.language === 'en' ? 'en' : 'es')} className="tzij-theme tzij-card">
            <span className="tzij-card-badge">{t('products.tzij.badge')}</span>
            <h3 className="tzij-card-title">{t('products.tzij.title')}</h3>
            <span className="tzij-card-meaning">{t('products.tzij.meaning')}</span>
            <p className="tzij-card-text">{t('products.tzij.description')}</p>
            <span className="tzij-card-cta">
              {t('products.tzij.cta')}
              <span className="tzij-card-arrow" aria-hidden="true">→</span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default Products;
