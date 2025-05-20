import React from 'react';
import { motion } from 'framer-motion';
// import { 
//   IconCode, 
//   IconCloudUpload, 
//   IconFileText,
//   IconArrowRight,
//   IconBrain
// } from '@tabler/icons-react';

import { Code, CloudUpload, FileText, ArrowRight, Brain,  } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Paste Your Code',
      description: 'Start by pasting any code snippet or entire file into our editor.',
      color: 'text-glow-purple',
      bgColor: 'bg-glow-purple'
    },
    {
      icon: <CloudUpload className="h-10 w-10" />,
      title: 'Submit for Analysis',
      description: 'Click the analyze button to send your code to our AI system.',
      color: 'text-glow-blue',
      bgColor: 'bg-glow-blue'
    },
    {
      icon: <Brain className="h-10 w-10" />,
      title: 'AI Processing',
      description: 'Our advanced AI analyzes each line of code to understand its purpose.',
      color: 'text-glow-cyan',
      bgColor: 'bg-glow-cyan'
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: 'Get Explanation',
      description: 'Receive detailed line-by-line explanations of your code in seconds.',
      color: 'text-glow-green',
      bgColor: 'bg-glow-green'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Four simple steps to transform complex code into understandable explanations
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-glow-purple via-glow-blue to-glow-green opacity-30 transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${step.color} bg-gray-800 border-2 border-gray-700 mb-4 relative`}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.icon}
                  <motion.span 
                    className={`absolute inset-0 rounded-full ${step.bgColor} opacity-20`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.span>
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-600 mt-4 hidden md:block transform rotate-90 md:rotate-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Demo animation */}
        <motion.div 
          className="mt-20 bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6 max-w-4xl mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative">
            <motion.div 
              className="flex overflow-x-hidden pb-4"
              animate={{ 
                x: [0, -600, -1200, -1800, -2400, -3000, 0],
              }}
              transition={{ 
                duration: 20, 
                ease: "linear", 
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <div className="flex-shrink-0 w-full px-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <p className="text-gray-300 font-mono text-sm">
                    <span className="text-glow-blue">function</span> <span className="text-glow-green">calculateAverage</span>(<span className="text-glow-purple">numbers</span>) {'{'}
                  </p>
                  <p className="text-gray-300 font-mono text-sm pl-4">
                    <span className="text-glow-blue">const</span> sum = numbers.<span className="text-glow-cyan">reduce</span>((acc, num) =&gt; acc + num, 0);
                  </p>
                  <p className="text-gray-300 font-mono text-sm pl-4">
                    <span className="text-glow-blue">return</span> sum / numbers.<span className="text-glow-pink">length</span>;
                  </p>
                  <p className="text-gray-300 font-mono text-sm">
                    {'}'}
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full px-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <p className="text-glow-purple font-medium mb-2">Line 1: Function Declaration</p>
                  <p className="text-gray-300 text-sm">
                    This line declares a function named 'calculateAverage' that takes an array parameter named 'numbers'.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full px-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <p className="text-glow-purple font-medium mb-2">Line 2: Array Reduction</p>
                  <p className="text-gray-300 text-sm">
                    This line uses the reduce method to sum all numbers in the array. It starts with an initial accumulator value of 0.
                  </p>
                </div>
              </div>
              
              <div className="flex-shrink-0 w-full px-4">
                <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                  <p className="text-glow-purple font-medium mb-2">Line 3: Average Calculation</p>
                  <p className="text-gray-300 text-sm">
                    This line returns the average by dividing the sum by the number of elements in the array.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;