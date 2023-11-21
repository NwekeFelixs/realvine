import React from 'react'
import Header from './components/fragments/Header';
import HeroSection from './components/fragments/HeroSection';
import AboutSection from './components/fragments/AboutSection';
import ServiceSection from './components/fragments/ServiceSection';
import PropertySection from './components/fragments/PropertySection';
import ContactSection from './components/fragments/ContactSection';
import NewsletterSection from './components/fragments/NewsletterSection';
import Footer from './components/fragments/Footer';

function Home() {
  return (
    <div>
      <Header/>
      <main>
        <article> 
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <PropertySection/>
            <ContactSection/>
            <NewsletterSection/>
        </article>
      </main>
      <Footer/>
    </div>
  )
}


export default Home