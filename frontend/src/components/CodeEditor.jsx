import React from 'react';
import { motion } from 'framer-motion';

const CodeEditor = ({ code, 

  onChange }) => {

  const handleCodeChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <motion.div 
      className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Editor Header */}
      <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {/* <div className="text-gray-400 text-xs uppercase">{language}</div>  */}
      </div>
      
      {/* Code Area */}
      <div className="relative flex h-full">
        {/* Line Numbers */}
        <div className="text-right pr-2 pt-2 pb-2 bg-gray-900 text-gray-500 select-none">
          {code.split('\n').map((_, i) => (
            <div key={i} className="h-6 text-xs px-2">
              {i + 1}
            </div>
          ))}
        </div>
        
        {/* Text Area */}
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="flex-grow resize-none bg-gray-900 text-gray-300 outline-none p-2 font-mono text-sm leading-6 h-full min-h-[350px] overflow-auto"
          spellCheck="false"
          placeholder="Paste your code here..."
        />
      </div>
    </motion.div>
  );
};

export default CodeEditor;