import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import akramImage from '../assets/akram.png';
import YashmeetImage from '../assets/Yashmeet.jpg'; 
const About = () => {
  const teamMembers = [
    {
      name: 'Yashmeet Singh',
      role: 'Frontend Developer',
      img: YashmeetImage,
    },
    {
      name: 'Akram Khan',
      role: 'Backend Developer',
      img: akramImage, 
    }
  ];

  return (
    <section id="about" className="about-section py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="about-title text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          Meet the Team
        </motion.h2>
        
        <motion.p
          className="about-description text-xl text-center max-w-2xl mx-auto mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          We are passionate developers bringing AI-powered code insights to life. Here's who's behind the magic.
        </motion.p>
        
        <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map(({ name, role, img }, idx) => (
            <motion.div
              className="team-card bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-glow-purple transition-shadow"
              key={name} // Using name as key is better than index
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <img 
                src={img} 
                alt={name} 
                className="team-avatar w-32 h-32 mx-auto rounded-full object-cover mb-4 border-2 border-glow-purple"
              />
              <h3 className="team-name text-2xl font-semibold mb-2">{name}</h3>
              <p className="team-role text-glow-blue">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;