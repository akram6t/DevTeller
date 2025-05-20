import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Code, Menu, X, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', onClick: handleHomeClick },
    { name: 'Features', onClick: () => scrollTo('features') },
    { name: 'How It Works', onClick: () => scrollTo('how-it-works') },
    { name: 'Team', onClick: () => scrollTo('team') },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900 bg-opacity-90 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-2 z-50"
        >
          <Code className="text-glow-purple w-8 h-8" stroke={2} />
          <span className="text-xl font-bold bg-gradient-to-r from-glow-purple to-glow-blue text-transparent bg-clip-text">
            CodeExplainer
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={link.onClick}
              className="text-gray-300 hover:text-white transition-colors px-3 py-2"
            >
              {link.name}
            </button>
          ))}
          
          <Link to="/code-explain">
            <motion.button
              className="px-5 py-2 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue hover:from-glow-blue hover:to-glow-purple text-white font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Now <ArrowRight className="ml-2 h-4 w-4" />
            </motion.button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <Link to="/code-explain" className="mr-2">
            <motion.button
              className="px-4 py-2 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue text-white text-sm font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try Now
            </motion.button>
          </Link>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-gray-900 bg-opacity-95 backdrop-blur-lg md:hidden z-40 pt-8 px-6"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.path ? () => { link.onClick(); if (link.path) setIsOpen(false); } : link.onClick}
                  className="text-2xl text-gray-300 hover:text-white py-3 border-b border-gray-800 text-left"
                >
                  {link.name}
                </button>
              ))}
              
              <Link to="/code-explain" onClick={() => setIsOpen(false)}>
                <motion.button
                  className="w-full mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue text-white font-medium flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Try Now <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;