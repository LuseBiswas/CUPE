import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../public/assets/CUPEF.png';
import { CgMenu, CgClose } from 'react-icons/cg';
import styles from './NavBar.module.css';

const NavLinks = [
  { LinkText: "Home", LinkTo: "/" },
  { LinkText: "About", LinkTo: "/About" },
  { LinkText: "Experience", LinkTo: "/Experience" },
  { LinkText: "Notes", LinkTo: "/Notes" },
  { LinkText: "PYQs", LinkTo: "/DSAQ"}
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link to="/" className={styles.logoLink}>
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>
        
        <div className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CgClose size={24} /> : <CgMenu size={24} />}
        </div>
        
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          {NavLinks.map((item, index) => (
            <li key={index} className={location.pathname === item.LinkTo ? styles.active : ''}>
              <Link to={item.LinkTo} onClick={() => setIsMenuOpen(false)}>
                {item.LinkText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;