import React from 'react';
import { motion } from 'framer-motion';

const GlowingBackground = () => {
  // Generate random positions for the glowing orbs
  const orbs = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 80 + 10}%`,
    y: `${Math.random() * 80 + 10}%`,
    size: Math.random() * 0.6 + 0.4,
    color: i % 2 === 0 ? 'from-glow-purple to-glow-blue' : 'from-glow-blue to-glow-purple',
    duration: Math.random() * 10 + 20,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-r ${orb.color} opacity-20 blur-3xl`}
          style={{
            left: orb.x,
            top: orb.y,
            width: `${Math.max(200, window.innerWidth * orb.size * 0.4)}px`,
            height: `${Math.max(200, window.innerWidth * orb.size * 0.4)}px`,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            scale: [0.8, 1.2, 0.9],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
      
      {/* Grid patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise-pattern opacity-10"></div>
    </div>
  );
};

export default GlowingBackground;