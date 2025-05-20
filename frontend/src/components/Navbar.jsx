import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
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

  const navLinks = [
    { name: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
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
                <Link to={link.path}>
                  <button className="px-5 py-2 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue hover:from-glow-blue hover:to-glow-purple text-white font-medium">
                    {link.name}
                  </button>
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

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gray-800 bg-opacity-70"
          >
            {isOpen ? <IconX className="w-6 h-6 text-white" /> : <IconMenu2 className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.path ? (
                  <Link to={link.path} onClick={() => setIsOpen(false)}>
                    <button className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue text-white font-medium">
                      {link.name}
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      link.onClick();
                      setIsOpen(false);
                    }}
                    className="block py-2 text-gray-300 hover:text-white transition-colors w-full text-left"
                  >
                    {link.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;