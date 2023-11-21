import React from 'react';
import '../css/style.css';
import { IoCallOutline } from 'react-icons/io5';

const ContactSection = () => {
  return (
    <section className="section contact" aria-label="contact">
      <div className="container">
        <h2 className="h2 section-title">Have Question? Get in touch!</h2>
        <p className="section-text">
          A great platform to buy, sell, and rent your properties without any agent or commissions.
        </p>
        <button className="btn btn-primary">
          <IoCallOutline/>
          <span className="span">Contact us</span>
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
