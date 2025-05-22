import React from 'react';
import { motion } from 'framer-motion';
import { Github, Link, Linkedin, Mail } from 'lucide-react';

import akramImage from '../assets/akram.jpg';
import YashmeetImage from '../assets/Yashmeet.jpg';

const Teams = () => {
  const teamMembers = [
    {
      name: 'Yashmeet Singh',
      role: 'Fullstack Web-Developer',
      img: YashmeetImage,
      social: [
        { icon: <Github />, href: 'https://github.com/YashmeetSingh-portfolio' },
        { icon: <Linkedin />, href: 'https://www.linkedin.com/in/yashmeet-dhaliwal-307a452a8/' },
        { icon: <Mail />, href: 'mailto:opyash471@gmail.com' }
      ]
    },
    {
      name: 'Akram Khan',
      role: 'Fullstack Developer',
      img: akramImage,
      social: [
        { icon: <Link />, href: 'https://akram6t.vercel.app' },
        { icon: <Github />, href: 'https://github.com/akram6t' },
        { icon: <Linkedin />, href: 'https://linkedin.com/in/akram6t' },
        { icon: <Mail />, href: 'mailto:khanakram8435@gmail.com' }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 relative scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-glow-purple to-glow-blue text-transparent bg-clip-text">
              Meet The Team
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The passionate developers bringing AI-powered code insights to life
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center hover:border-gray-600 transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-32 h-32 mx-auto rounded-full mb-6 overflow-hidden border-2 border-transparent"
                whileHover={{ borderColor: '#8b5cf6' }}
              >
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <p className="text-glow-blue mb-6">{member.role}</p>
              
              <div className="flex justify-center space-x-4">
                {member.social.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, color: '#8b5cf6' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Interested in joining our team?
          </p>
          <motion.a
            href="mailto:careers@codeexplainer.com"
            className="inline-block px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 text-white"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Teams;