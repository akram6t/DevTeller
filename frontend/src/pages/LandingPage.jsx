import React, { lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import Teams from '../components/Teams.jsx';

const GlowingBackground = lazy(() => import('../components/GlowingBackground'));

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
        <Teams />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;