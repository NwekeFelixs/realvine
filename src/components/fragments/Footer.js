import React from 'react';
import '../css/style.css';
import { IoBusinessOutline, IoCallOutline, IoChevronForward, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMailOutline } from 'react-icons/io5';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <IoBusinessOutline className='ion-icon' /> Realvine
            </a>
            <p className="footer-text">
              A great platform to buy, sell and rent your properties without any agent or commissions.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">About us</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Services</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Pricing</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Blog</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Login</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Useful Links</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Terms of Services</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Listing</span>
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                <IoChevronForward/>
                <span className="span">Contact</span>
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Details</p>
            </li>
            <li className="footer-item">
              <ion-icon name="location-outline"></ion-icon>
              <address className="address">
                C/54 Northwest Freeway,<br />
                Suite 558,<br />
                Houston, USA 485
                <a href="#" className="address-link">
                  View on Google map
                </a>
              </address>
            </li>
            <li className="footer-item">
              <IoMailOutline/>
              <a href="mailto:contact@example.com" className="footer-link">
                contact@example.com
              </a>
            </li>
            <li className="footer-item">
              <IoCallOutline/>
              <a href="tel:+152534468854" className="footer-link">
                +152 534-468-854
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2022 Realvine. All Rights Reserved by <a href="https://github.com/NwekeFelixs" className="copyright-link">Feylicks</a>.
          </p>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link">
                <IoLogoFacebook/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoInstagram/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoTwitter/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <IoLogoLinkedin/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
