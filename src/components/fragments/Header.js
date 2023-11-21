import React, { useState, useEffect } from 'react';
import '../css/style.css';
import { IoMenuOutline, IoCloseOutline, IoBusinessOutline } from 'react-icons/io5';

const Header = () => {
  const [isNavActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!isNavActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      const backTopBtn = document.querySelector("[data-back-top-btn]");

      // Perform null check before accessing classList property
      if (header && backTopBtn) {
        if (window.scrollY >= 50) {
          header.classList.add("active");
          backTopBtn.classList.add("active");
        } else {
          header.classList.remove("active");
          backTopBtn.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isNavActive ? 'active' : ''}`} data-header>
      <div className="container">

        <a href="#" className="logo">
          <IoBusinessOutline className='ion-icon' /> Realvine
        </a>

        <nav className={`navbar container ${isNavActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>Home</a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>Buy</a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>Sell</a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>Listing</a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>About Us</a>
            </li>
            <li>
              <a href="#" className="navbar-link" data-nav-link onClick={closeNav}>Contact</a>
            </li>
          </ul>
        </nav>

        <a href="#" className="btn btn-secondary">Signup</a>

        <button className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler onClick={toggleNav}>
          {isNavActive ? <IoCloseOutline aria-hidden="true" className="close-icon" /> : <IoMenuOutline aria-hidden="true" className="menu-icon" />}
        </button>

      </div>
    </header>
  );
};

export default Header;
