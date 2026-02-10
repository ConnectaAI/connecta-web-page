import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/connecta-logo.svg';
import LanguageSwitcher from './LanguageSwitcher';
import '../styles/Navbar.css';

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

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
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Connecta Logo" className="logo-image" />
          </Link>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t('nav.home')}</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t('nav.about')}</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>{t('nav.services')}</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t('nav.contact')}</a></li>
        </ul>
        <div className="nav-actions">
          <LanguageSwitcher />
          <a href="#contact" className="nav-contact-btn" onClick={(e) => scrollToSection(e, 'contact')}>
            {t('nav.contact')}
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
