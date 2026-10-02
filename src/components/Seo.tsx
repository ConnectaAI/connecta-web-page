import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { langFromPath } from '../lib/routes';
import { applyHead, seoFor } from '../lib/seo';

// The prerendered HTML already carries the right head tags for the landing
// URL; this keeps them (and <html lang>) correct on client-side navigation
// and language switches.
function Seo() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const lng = langFromPath(pathname);

  useEffect(() => {
    if (i18n.language !== lng) i18n.changeLanguage(lng);
  }, [lng, i18n]);

  useEffect(() => {
    document.documentElement.lang = lng;
    applyHead(seoFor(pathname, lng, i18n.getFixedT(lng)));
  }, [pathname, lng, i18n, t]);

  return null;
}

export default Seo;
