import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { localizedPath } from '../lib/routes';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    navigate(`${localizedPath(pathname, newLang)}${search}${hash}`);
  };

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {i18n.language === 'es' ? 'ES' : 'EN'}
    </button>
  );
}

export default LanguageSwitcher;
