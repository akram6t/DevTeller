import React from 'react';
import { motion } from 'framer-motion';
import { IconBrain } from '@tabler/icons-react';

const LoadingOverlay = () => {
  // Animation variants for the loading state
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Dots animation
  const dotsVariants = {
    animate: {
      opacity: [0.3, 1, 0.3],
      y: [0, -6, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center w-full h-full min-h-[400px]"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div 
        className="mb-6 relative"
        variants={itemVariants}
      >
        <motion.div 
          className="w-16 h-16 bg-gradient-to-br from-glow-purple to-glow-blue rounded-full flex items-center justify-center animate-pulse-slow"
          animate={{ 
            boxShadow: [
              '0 0 10px 2px rgba(139, 92, 246, 0.3)',
              '0 0 20px 6px rgba(139, 92, 246, 0.6)',
              '0 0 10px 2px rgba(139, 92, 246, 0.3)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <IconBrain size={36} className="text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute -top-2 -right-2 w-4 h-4 bg-glow-cyan rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute -bottom-1 -left-1 w-3 h-3 bg-glow-pink rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ 
            duration: 1.7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </motion.div>
      
      <motion.h3 
        className="text-xl font-semibold text-white mb-3"
        variants={itemVariants}
      >
        Analyzing Your Code
      </motion.h3>
      
      <motion.p 
        className="text-gray-300 text-center max-w-md mb-6"
        variants={itemVariants}
      >
        Our AI is breaking down your code to provide detailed explanations.
        This might take a few moments.
      </motion.p>
      
      <motion.div 
        className="flex space-x-2"
        variants={itemVariants}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-glow-purple"
            variants={dotsVariants}
            animate="animate"
            custom={i}
            transition={{
              delay: i * 0.2
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LoadingOverlay;