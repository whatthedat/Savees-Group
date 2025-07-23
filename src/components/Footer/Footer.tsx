import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <div className="footer-logo-container">
              <img src="/images/logo.png" alt="Savees Group Logo" className="footer-logo-img" />
            </div>
            <p className="footer-about">
              Providing exceptional services with integrity and excellence. 
              We are committed to delivering the best solutions for our clients.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/share/1CC3s7JStf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/savees_group_ltd" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/savees-group-ltd/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Savees Group LTD. All rights reserved.</p>
          <p className="credit">Made with <span className="heart">❤️</span> by <a href="https://lynkz-agency.vercel.app/" target="_blank" rel="noopener noreferrer">Lynkz Agency</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
