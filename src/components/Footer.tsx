import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { LEGAL_PATHS } from './LegalPage';
import { langFromPath, localizedPath } from '../lib/routes';

function Footer() {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const lng = langFromPath(pathname);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p className="footer-tagline">{t('footer.tagline')}</p>
          <p className="footer-madeIn">{t('footer.madeIn')}</p>
        </div>
        <nav className="footer-links" aria-label="Legal">
          <Link to={localizedPath(LEGAL_PATHS.privacy, lng)}>{t('footer.privacy')}</Link>
          <Link to={localizedPath(LEGAL_PATHS.terms, lng)}>{t('footer.terms')}</Link>
        </nav>
        <div className="footer-content">
          <p>&copy; 2026 Connecta. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
