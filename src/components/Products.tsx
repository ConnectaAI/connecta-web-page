import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import dashboardImage from '../assets/dashboard.jpg';
import '../styles/Products.css';

function Products() {
  const { t } = useTranslation();

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
          <Link to="/medassistant" className="product-feature-link">
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
      </div>
    </section>
  );
}

export default Products;
