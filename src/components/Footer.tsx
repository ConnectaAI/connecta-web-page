import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2025 Connecta. {t('footer.rights')}</p>
      </div>
    </footer>
  );
}

export default Footer;
