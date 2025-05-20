import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { IconArrowRight, IconTerminal2 } from '@tabler/icons-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background code effect */}
      <div className="absolute inset-0 opacity-5 z-0 overflow-hidden">
        <pre className="text-xs md:text-sm text-white/50 leading-tight p-4 overflow-hidden">
          {`function explainCode(code) {
  const lines = code.split('\\n');
  return lines.map((line, index) => {
    return {
      lineNumber: index + 1,
      code: line,
      explanation: analyzeCodeLine(line)
    };
  });
}

function analyzeCodeLine(line) {
  // AI-powered code analysis
  if (line.includes('function')) {
    return 'This line defines a new function';
  } else if (line.includes('return')) {
    return 'This line returns a value from the function';
  } else if (line.includes('if')) {
    return 'This line creates a conditional branch';
  }
  
  return 'This line executes standard code';
}`}
        </pre>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-glow-purple to-glow-blue text-transparent bg-clip-text">
                Understand Code 
              </span> 
              <br /> 
              Like Never Before
            </h1>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              AI-powered code explanations that break down complex code line by line. 
              Perfect for learners, code reviewers, and developers navigating unfamiliar codebases.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link to="/code-explain">
                <motion.button
                  className="px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-glow-purple to-glow-blue hover:from-glow-blue hover:to-glow-purple text-white flex items-center justify-center transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try It Now <IconArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>

              <Link to="/#how-it-works">
                <motion.button
                  className="px-8 py-3 text-lg font-medium rounded-full border border-gray-700 hover:border-gray-500 text-white flex items-center justify-center transition-all"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  How It Works
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <motion.div 
                className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-2xl relative z-10"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <IconTerminal2 className="h-5 w-5 text-gray-400" />
                </div>

                <div className="text-sm text-gray-300 font-mono">
                  <div className="flex mb-2">
                    <span className="text-gray-500 mr-4">1</span>
                    <span className="text-glow-cyan">function</span>
                    <span className="text-white"> calculateTotal</span>
                    <span className="text-glow-blue">(items)</span>
                    <span className="text-white"> {`{`}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-gray-500 mr-4">2</span>
                    <span className="ml-4 text-glow-cyan">return</span>
                    <span className="text-white"> items.</span>
                    <span className="text-glow-pink">reduce</span>
                    <span className="text-glow-blue">((sum, item)</span>
                    <span className="text-white"> {'=>'} </span>
                    <span className="text-white"> {`{`}</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-gray-500 mr-4">3</span>
                    <span className="ml-8 text-glow-cyan">return</span>
                    <span className="text-white"> sum + item.price;</span>
                  </div>
                  <div className="flex mb-2">
                    <span className="text-gray-500 mr-4">4</span>
                    <span className="ml-4 text-white">{`}, 0);`}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-500 mr-4">5</span>
                    <span className="text-white">{`}`}</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="absolute -bottom-10 -right-10 bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg w-3/4 z-0"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <h3 className="text-glow-purple font-medium mb-2">Line 2 Explanation:</h3>
                <p className="text-sm text-gray-300">
                  This line uses the Array.reduce() method to calculate the sum of all item prices.
                  The reduce function iterates through each item in the array, accumulating a total sum.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;