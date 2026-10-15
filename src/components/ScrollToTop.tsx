import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// React Router doesn't reset scroll position on navigation — without this,
// clicking a link while scrolled down on one page lands at that same pixel
// offset on the next page instead of its top.
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Honor in-page anchors (e.g. /privacidad#eliminacion-de-datos).
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
