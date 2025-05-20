
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';

const teamMembers = [
  {
    name: 'Yashmeet Singh',
    role: 'Frontend Developer',
    img: 'https://i.pravatar.cc/150?img=12', // dummy avatar
  },
  {
    name: 'Akram',
    role: 'backend Developer',
    img: 'https://i.pravatar.cc/150?img=34',
  }
];

const About = () => {
  return (
    <section className="about-section">
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Meet the Team
      </motion.h2>
      <motion.p
        className="about-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We are passionate developers bringing AI-powered code insights to life. Here’s who’s behind the magic.
      </motion.p>
      <div className="team-grid">
        {teamMembers.map(({ name, role, img }, idx) => (
          <motion.div
            className="team-card"
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <img src={img} alt={name} className="team-avatar" />
            <h3 className="team-name">{name}</h3>
            <p className="team-role">{role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
