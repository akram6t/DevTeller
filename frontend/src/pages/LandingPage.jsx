import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import GlowingBackground from '../components/GlowingBackground';
import About from '../components/about.jsx';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <GlowingBackground />
      <Navbar />
      <main>
        <Hero />

        <div id="features" className="py-20">
          <Features />
        </div>
        <div id="how-it-works" className="py-20">
          <HowItWorks />
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;