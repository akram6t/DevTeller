import React from 'react';
import { motion } from 'framer-motion';
import { 
  IconBrain, 
  IconCode, 
  IconMicrophone, 
  IconDeviceDesktopAnalytics,
  IconDeviceMobile,
  IconCloudComputing,
  IconBrandInertia
} from '@tabler/icons-react';

const Features = () => {
  const features = [
    {
      icon: <IconBrain className="h-10 w-10" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced AI that understands code patterns and explains them in simple, concise language.',
      gradient: 'from-glow-purple to-glow-blue'
    },
    {
      icon: <IconCode className="h-10 w-10" />,
      title: 'Line by Line Explanation',
      description: 'Detailed breakdown of each line of code with context-aware explanations.',
      gradient: 'from-glow-blue to-glow-cyan'
    },
    {
      icon: <IconMicrophone className="h-10 w-10" />,
      title: 'Natural Language',
      description: 'Clear explanations in plain English, avoiding unnecessary technical jargon.',
      gradient: 'from-glow-cyan to-glow-green'
    },
    {
      icon: <IconDeviceDesktopAnalytics className="h-10 w-10" />,
      title: 'Interactive Interface',
      description: 'Click on any line to get deeper insights and more detailed explanations.',
      gradient: 'from-glow-green to-glow-purple'
    },
    {
      icon: <IconDeviceMobile className="h-10 w-10" />,
      title: 'Mobile Responsive',
      description: 'Use on any device with a fully responsive design that works on desktop, tablet, and mobile.',
      gradient: 'from-glow-pink to-glow-purple'
    },
    {
      icon: <IconCloudComputing className="h-10 w-10" />,
      title: 'Cloud Processing',
      description: 'Powerful cloud-based analysis that works quickly even on complex codebases.',
      gradient: 'from-glow-blue to-glow-pink'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Designed to make code understanding effortless with cutting-edge AI technology that breaks down complex code.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all"
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} bg-opacity-20 mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;