import { useState, useEffect, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css';

// Height (in px) the fixed navbar occupies from the top of the viewport —
// used as the trigger line for the IntersectionObserver below.
const NAVBAR_OFFSET = 90;

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOverLight, setIsOverLight] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    const heroEl = document.getElementById('home');

    // No hero on this route — stay on the always-readable light theme.
    if (!heroEl) {
      setIsOverLight(true);
      return;
    }

    // A hero declares its own theme via data-navbar-theme (defaults to dark
    // if unset, matching medassistant's Hero). A light hero never needs the
    // transparent/white-text treatment — stay on the opaque light theme for
    // its entire scroll range, no observer needed.
    if (heroEl.dataset.navbarTheme === 'light') {
      setIsOverLight(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // While the hero still intersects the area below the navbar, the dark
        // background is behind it — keep the transparent/white theme. Once the
        // hero scrolls past that line, switch to the opaque light theme.
        setIsOverLight(!entry.isIntersecting);
      },
      { rootMargin: `-${NAVBAR_OFFSET}px 0px 0px 0px`, threshold: 0 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  };

  return (
    <nav
      className={`navbar ${isOverLight ? 'navbar-on-light' : ''} ${location.pathname === '/' ? 'navbar-black-text' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <Link to="/">
            <Logo className="logo-image" />
          </Link>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t('nav.home')}</a></li>
          <li><Link to="/medassistant" onClick={closeMenu}>{t('nav.medassistant')}</Link></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t('nav.contact')}</a></li>
        </ul>
        <div className="nav-actions">
          <LanguageSwitcher />
          <button className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
