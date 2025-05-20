import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Changed from 'react-router'
import { motion } from 'framer-motion';
import { IconCode, IconMenu2, IconX } from '@tabler/icons-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const handleHomeClick = () => {
    // Only scroll to top if we're already on home page
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', onClick: handleHomeClick },
    { name: 'Features', onClick: () => scrollTo('features') },
    { name: 'How It Works', onClick: () => scrollTo('how-it-works') },
    { name: 'Try It', path: '/code-explain' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black bg-opacity-80 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center space-x-2">
            <IconCode className="text-glow-purple w-8 h-8" stroke={2} />
            <span className="text-xl font-bold bg-gradient-to-r from-glow-purple to-glow-blue text-transparent bg-clip-text">
              CodeExplainer
            </span>
          </div>
        </Link>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <div key={index}>
              {link.path ? (
                <Link to={link.path} onClick={link.onClick}>
                  {link.name === 'Try It' ? (
                    <button className="px-5 py-2 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue hover:from-glow-blue hover:to-glow-purple text-white font-medium">
                      {link.name}
                    </button>
                  ) : (
                    <button className="text-gray-300 hover:text-white transition-colors">
                      {link.name}
                    </button>
                  )}
                </Link>
              ) : (
                <button
                  onClick={link.onClick}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* ... rest of your navbar code remains the same ... */}
      </div>
    </nav>
  );
};

export default Navbar;