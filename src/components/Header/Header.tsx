import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-container">
          <div className="logo-container">
            <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
              <img src="/images/logo.png" alt="Savees Group LTD" className="logo-image" />
            </Link>
          </div>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}>
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/jobs' ? 'active' : ''}`}>
                <Link to="/jobs" className="nav-link">Jobs</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
