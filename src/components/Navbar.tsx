import { useState, useEffect, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css';

// Height (in px) the fixed navbar occupies from the top of the viewport —
// used as the trigger line for the IntersectionObserver below.
const NAVBAR_OFFSET = 90;

// Scroll distance (in px) after which the full-width bar contracts into the
// floating pill. Small enough to feel responsive, large enough that a stray
// wheel tick doesn't flicker it.
const SCROLLED_THRESHOLD = 24;

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOverLight, setIsOverLight] = useState<boolean>(true);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  // Full-width bar at the top of the page, floating pill once scrolled —
  // same behavior on every screen size and every route.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      setIsScrolled(window.scrollY > SCROLLED_THRESHOLD);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isOverLight ? 'navbar-on-light' : ''} ${location.pathname === '/' ? 'navbar-black-text' : ''}`}
    >
      <div className="container">
        <div className="logo">
          <Link to="/">
            <Logo className="logo-image" />
          </Link>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#home"
              className={location.pathname === '/' ? 'active' : ''}
              onClick={(e) => scrollToSection(e, 'home')}
            >
              {t('nav.home')}
            </a>
          </li>
          <li>
            <Link
              to="/medassistant"
              className={location.pathname === '/medassistant' ? 'active' : ''}
              onClick={closeMenu}
            >
              {t('nav.medassistant')}
            </Link>
          </li>
          <li className="nav-cta-mobile-item">
            <a href="#contact" className="nav-cta" onClick={(e) => scrollToSection(e, 'contact')}>
              {t('nav.getInTouch')}
              <span>→</span>
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a href="#contact" className="nav-cta nav-cta-desktop" onClick={(e) => scrollToSection(e, 'contact')}>
            {t('nav.getInTouch')}
            <span>→</span>
          </a>
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
