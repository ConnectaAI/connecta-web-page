import { useTranslation } from 'react-i18next';
import Logo from './Logo';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <p className="footer-madeIn">{t('footer.madeIn')}</p>
        </div>
        <div className="footer-content">
          <p>&copy; 2025 Connecta. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
