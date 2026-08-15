import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import '../styles/Products.css';

function Products() {
  const { t } = useTranslation();

  return (
    <section id="products" className="products">
      <div className="products-container">
        <Reveal className="products-header">
          <span className="products-label">{t('products.label')}</span>
          <h2 className="products-title">{t('products.title')}</h2>
        </Reveal>
        <Reveal delay={0.1} className="product-card">
          <div className="product-card-content">
            <span className="product-card-badge">{t('products.medassistant.badge')}</span>
            <h3 className="product-card-title">{t('products.medassistant.title')}</h3>
            <p className="product-card-description">{t('products.medassistant.description')}</p>
            <Link to="/medassistant" className="product-card-cta">
              {t('products.medassistant.cta')}
              <span className="product-card-cta-arrow">→</span>
            </Link>
          </div>
        </Reveal>
        <p className="products-more">{t('products.more')}</p>
      </div>
    </section>
  );
}

export default Products;
