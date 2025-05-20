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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Try It', path: '/code-explain' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 shadow-lg backdrop-blur-md py-2' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <IconCode className="text-glow-purple w-8 h-8" stroke={2} />
            <span className="text-xl font-bold bg-gradient-to-r from-glow-purple to-glow-blue text-transparent bg-clip-text">
              CodeExplainer
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.div 
          className="hidden md:flex space-x-8 items-center"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              {link.name === 'Try It' ? (
                <Link to={link.path}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue hover:from-glow-blue hover:to-glow-purple text-white font-medium"
                  >
                    {link.name}
                  </motion.button>
                </Link>
              ) : (
                <Link 
                  to={link.path} 
                  className="text-gray-300 hover:text-white transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-glow-purple to-glow-blue group-hover:w-full transition-all duration-300"></span>
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gray-800 bg-opacity-70"
          >
            {isOpen ? (
              <IconX className="w-6 h-6 text-white" />
            ) : (
              <IconMenu2 className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900 border-t border-gray-800"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name === 'Try It' ? (
                  <Link to={link.path} onClick={() => setIsOpen(false)}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-5 py-2 rounded-full bg-gradient-to-r from-glow-purple to-glow-blue text-white font-medium"
                    >
                      {link.name}
                    </motion.button>
                  </Link>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;