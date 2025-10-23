import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Connecta. {t('footer.rights')}</p>
          <div className="footer-links">
            <Link to="/agent-policy" className="footer-link">{t('nav.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
