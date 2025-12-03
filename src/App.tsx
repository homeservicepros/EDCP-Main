
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Features from './components/Features';
import Process from './components/Process';
import ContentSections from './components/ContentSections';
import Locations from './components/Locations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingCallButton from './components/FloatingCallButton';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <Features />
      <Process />
      <ContentSections />
      <Locations />
      <Testimonials />
      <FAQ />
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export default App;
