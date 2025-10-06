import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/connecta-logo.svg';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
          <img src={logo} alt="Connecta Logo" className="logo-image" />
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>{t('nav.home')}</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>{t('nav.about')}</a></li>
          <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')}>{t('nav.services')}</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>{t('nav.contact')}</a></li>
        </ul>
        <div className="nav-actions">
          <LanguageSwitcher />
          <div className="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
