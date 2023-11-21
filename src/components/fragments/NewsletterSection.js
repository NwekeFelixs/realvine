import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="newsletter" aria-label="newsletter">
      <div className="container">
        <div className="wrapper">
          <h2 className="h2 section-title">Subscribe to Newsletter!</h2>
          <p className="section-text">Subscribe to get the latest updates and information.</p>
        </div>
        <form action="" className="newsletter-form">
          <input
            type="email"
            name="email_address"
            placeholder="Enter your email :"
            aria-label="Enter your email"
            required
            className="email-field"
          />
          <button type="submit" className="btn btn-secondary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
