import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCode, IconFileText, IconBulb, IconArrowRight } from '@tabler/icons-react';

const CodeExplanation = ({ explanations, onLineClick, selectedLine, detailedExplanation }) => {
  const [hoveredLine, setHoveredLine] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  useEffect(() => {
    // When a new line is selected, animate the detailed view
    if (selectedLine !== null) {
      setIsDetailVisible(true);
    }
  }, [selectedLine]);

  // Animation variants
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const detailVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <IconFileText className="text-glow-purple" />
          <h2 className="text-xl font-semibold">Code Explanation</h2>
        </div>
        
        {explanations.length > 0 && (
          <div className="text-sm text-gray-400">
            {explanations.filter(exp => exp.code.trim() !== '').length} lines explained
          </div>
        )}
      </div>
      
      {explanations.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full text-center p-10">
          <div className="w-16 h-16 bg-gray-800 bg-opacity-50 rounded-full flex items-center justify-center mb-4">
            <IconCode size={28} className="text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-300 mb-2">No Code Analyzed Yet</h3>
          <p className="text-gray-400 max-w-md">
            Add your code in the editor and click "Explain Code" to get detailed explanations.
          </p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row h-full gap-4">
          {/* Left side: Code with line explanations */}
          <div className="w-full md:w-1/2 lg:w-7/12 overflow-auto pr-2">
            <motion.div 
              className="space-y-1"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {explanations.map((exp) => (
                <motion.div 
                  key={exp.line}
                  className={`relative py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedLine === exp.line 
                      ? 'bg-glow-purple bg-opacity-20 border border-glow-purple border-opacity-40' 
                      : hoveredLine === exp.line 
                        ? 'bg-gray-700 bg-opacity-40' 
                        : 'hover:bg-gray-700 hover:bg-opacity-30'
                  }`}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredLine(exp.line)}
                  onMouseLeave={() => setHoveredLine(null)}
                  onClick={() => onLineClick(exp.line)}
                >
                  <div className="flex items-start gap-2">
                    <div className="min-w-[30px] text-right text-gray-500 pt-0.5 select-none">
                      {exp.line}
                    </div>
                    <pre className="flex-1 overflow-x-hidden whitespace-pre font-mono text-sm text-white">
                      {exp.code}
                    </pre>
                  </div>
                  
                  {/* Preview explanation on hover */}
                  <AnimatePresence>
                    {(hoveredLine === exp.line && selectedLine !== exp.line && exp.explanation) && (
                      <motion.div 
                        className="mt-2 pl-9 pr-2 text-sm text-gray-300 italic border-l-2 border-glow-purple border-opacity-50"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.explanation}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Button indicator for lines with explanations */}
                  {exp.explanation && (
                    <motion.div 
                      className={`absolute right-2 top-2 w-2 h-2 rounded-full ${
                        selectedLine === exp.line ? 'bg-glow-blue' : 'bg-glow-purple bg-opacity-70'
                      }`}
                      animate={{
                        scale: selectedLine === exp.line ? [1, 1.5, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: selectedLine === exp.line ? Infinity : 0,
                        repeatType: "reverse"
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right side: Detailed explanation */}
          <div className="w-full md:w-1/2 lg:w-5/12 overflow-auto">
            <AnimatePresence mode="wait">
              {selectedLine !== null && isDetailVisible ? (
                <motion.div 
                  key={`detail-${selectedLine}`}
                  className="h-full"
                  variants={detailVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, x: 50 }}
                >
                  <div className="bg-gray-800 bg-opacity-40 rounded-xl p-4 border border-gray-700 h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-glow-blue bg-opacity-20 flex items-center justify-center">
                        <IconBulb size={18} className="text-glow-blue" />
                      </div>
                      <div className="font-semibold text-glow-blue">Line {selectedLine} Detailed Analysis</div>
                    </div>
                    
                    <div className="mb-4 px-3 py-2 bg-gray-900 bg-opacity-50 rounded-lg border border-gray-800 font-mono text-sm">
                      {explanations.find(e => e.line === selectedLine)?.code || ''}
                    </div>
                    
                    <div className="prose prose-invert prose-sm max-w-none">
                      <div className="flex items-start gap-2 mb-3">
                        <IconArrowRight size={18} className="text-glow-purple mt-1 flex-shrink-0" />
                        <div className="text-gray-200">
                          {explanations.find(e => e.line === selectedLine)?.explanation || ''}
                        </div>
                      </div>
                      
                      {detailedExplanation && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <pre className="whitespace-pre-wrap text-gray-300 text-sm font-sans">{detailedExplanation}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  className="h-full flex flex-col items-center justify-center p-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-lg bg-opacity-50 flex items-center justify-center mb-3">
                    <motion.div
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <IconBulb size={32} className="text-gray-500" />
                    </motion.div>
                  </div>
                  <h4 className="text-lg font-medium text-gray-400 mb-2">Select a line of code</h4>
                  <p className="text-sm text-gray-500">
                    Click on any line to see a detailed explanation
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeExplanation;