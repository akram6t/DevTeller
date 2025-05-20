import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CodeEditor from '../components/CodeEditor';
import CodeExplanation from '../components/CodeExplanation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GlowingBackground from '../components/GlowingBackground';
import LoadingOverlay from '../components/LoadingOverlay';
import { IconBrain, IconCode, IconLanguage } from '@tabler/icons-react';
import { getExplanationsByCode } from '../utils/api';

// // Dummy data for code explanations
// const dummyExplanations = [
//     { 
//       line: 1, 
//       code: 'function calculateFactorial(n) {', 
//       explanation: 'This line defines a new function named "calculateFactorial" that takes a single parameter "n".',
//       detailedText: 'This is the function declaration in JavaScript. The "function" keyword is used to define a new function. "calculateFactorial" is the function name, and "n" is the parameter that will be passed to the function. The curly brace "{" opens the function body.'
//     },
//     { 
//       line: 2, 
//       code: '  if (n === 0 || n === 1) {', 
//       explanation: 'This is a conditional statement that checks if n equals 0 or 1, which are the base cases for the factorial calculation.',
//       detailedText: 'The "if" statement checks two conditions using the logical OR operator (||). The strict equality operator (===) ensures both value and type match. This is the base case for the recursive function, which stops the recursion when n is 0 or 1.'
//     },
//     { 
//       line: 3, 
//       code: '    return 1;', 
//       explanation: 'If n is 0 or 1, the function returns 1, since the factorial of 0 and 1 is 1.',
//       detailedText: 'This return statement provides the exit condition for the recursion. In mathematics, 0! and 1! both equal 1. This line ensures the function stops calling itself and starts returning values back up the call stack.'
//     },
//     { 
//       line: 4, 
//       code: '  } else {', 
//       explanation: 'This starts the "else" block that executes when n is not 0 or 1.',
//       detailedText: 'The "else" clause handles all cases where n is greater than 1. This is where the recursive magic happens, as the function will call itself with a smaller value of n.'
//     },
//     { 
//       line: 5, 
//       code: '    return n * calculateFactorial(n - 1);', 
//       explanation: 'This line uses recursion to calculate factorial. It multiplies n by the factorial of (n-1), calling the same function with a smaller value.',
//       detailedText: 'This is the recursive call that breaks down the problem into smaller subproblems. The function calls itself with n-1, multiplying the current n by the result of the factorial of n-1. This creates a chain of multiplications that eventually resolves when it hits the base case (n = 0 or 1).'
//     },
//     { 
//       line: 6, 
//       code: '  }', 
//       explanation: 'This closes the "else" block of the conditional statement.',
//       detailedText: 'This closing brace marks the end of the "else" block. In JavaScript, proper indentation and brace matching are important for code readability and structure.'
//     },
//     { 
//       line: 7, 
//       code: '}', 
//       explanation: 'This closes the function definition for calculateFactorial.',
//       detailedText: 'This closing brace marks the end of the function body. All JavaScript functions must be properly closed with a matching brace to avoid syntax errors.'
//     },
//     { 
//       line: 8, 
//       code: '', 
//       explanation: '',
//       detailedText: 'This empty line improves code readability by separating the function definition from its usage example.'
//     },
//     { 
//       line: 9, 
//       code: '// Example usage', 
//       explanation: 'This is a comment that indicates the following code demonstrates how to use the function.',
//       detailedText: 'JavaScript comments (starting with //) are ignored by the interpreter. This comment serves as documentation to explain that the following lines demonstrate how to call the factorial function.'
//     },
//     { 
//       line: 10, 
//       code: 'const result = calculateFactorial(5);', 
//       explanation: 'This line calls the calculateFactorial function with the argument 5 and stores the result in a constant variable named "result".',
//       detailedText: 'Here we call our function with the value 5. The "const" keyword declares a block-scoped variable that cannot be reassigned. The function will recursively calculate 5! (5 factorial), which equals 120.'
//     },
//     { 
//       line: 11, 
//       code: 'console.log(result); // Outputs: 120', 
//       explanation: 'This line prints the value of "result" to the console. The factorial of 5 is 120 (5 × 4 × 3 × 2 × 1).',
//       detailedText: 'The console.log() function outputs the result to the console. This is a common debugging technique in JavaScript. The comment indicates the expected output. The factorial calculation works as: 5! = 5 × 4 × 3 × 2 × 1 = 120.'
//     }
//   ];

const CodeExplainPage = () => {
  const [code, setCode] = useState(``);
  
  // const [language, setLanguage] = useState('javascript');
  const [isProcessing, setIsProcessing] = useState(false);
  const [explanations, setExplanations] = useState([]);
  const [selectedLine, setSelectedLine] = useState(null);
  const [detailedExplanation, setDetailedExplanation] = useState('');

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  // const handleLanguageChange = (newLanguage) => {
  //   setLanguage(newLanguage);
  // };

  const handleExplainCode = async () => {
    // In a real app, we would call the API here
    if(!code){
      return;
    }

    setIsProcessing(true);

    const { data, error } = await getExplanationsByCode(code);
    
    setIsProcessing(false);

    if(error){
      return setExplanations([{ line: 1, code: 'X: Unable to Explain the code Please try with different code.', explanation: 'X: Unable to Explain the code Please try with different code.', detailedText: '' }]);
    }
    
    setExplanations(data);
    
  };

  const handleLineClick = (lineNumber) => {
    setSelectedLine(lineNumber);
    
    // Find the selected line explanation
    const line = explanations.find(exp => exp.line === lineNumber);
    
    // Simulate more detailed explanation with additional context
    if (line) {
    //   const detailedText = `Detailed analysis of line ${lineNumber}:\n\n${line.explanation}\n\nAdditional context: This is part of a ${language} function using ${lineNumber === 5 ? "recursive" : "standard"} programming techniques. This pattern is commonly used in ${language} development for calculations that can be broken down into smaller, identical problems.`;
    const detailedText = explanations[lineNumber-1].detailedText;
      setDetailedExplanation(detailedText);
    //   setDetailedExplanation(dummyExplanations[line-1].detailedText);
    }
  };

  // const languageOptions = [
  //   { value: 'javascript', label: 'JavaScript' },
  //   { value: 'python', label: 'Python' },
  //   { value: 'java', label: 'Java' },
  //   { value: 'cpp', label: 'C++' },
  //   { value: 'csharp', label: 'C#' },
  //   { value: 'php', label: 'PHP' },
  //   { value: 'go', label: 'Go' },
  //   { value: 'rust', label: 'Rust' },
  //   { value: 'ruby', label: 'Ruby' },
  //   { value: 'typescript', label: 'TypeScript' },
  // ];

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <GlowingBackground />
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-glow-purple to-glow-blue text-transparent bg-clip-text">
              Code Explanation Tool
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Paste your code below and get detailed line-by-line explanations powered by AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - Code Input */}
          <motion.div 
            className="lg:col-span-1 flex flex-col gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <IconCode className="text-glow-purple" />
                  <h2 className="text-xl font-semibold">Your Code</h2>
                </div>
                
                {/* <div className="flex items-center gap-2">
                  <IconLanguage className="text-gray-400" size={18} />
                  <select
                    value={language}
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    className="bg-gray-900 border border-gray-700 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-glow-purple text-gray-300"
                  >
                    {languageOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div> */}
              </div>

              <div className="flex-grow mb-4">
                <CodeEditor
                  code={code}
                  // language={language}
                  onChange={handleCodeChange}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-4 bg-gradient-to-r from-glow-purple to-glow-blue rounded-full flex items-center justify-center gap-2 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-glow-purple transition-all"
                onClick={handleExplainCode}
                disabled={isProcessing}
              >
                <IconBrain size={20} />
                <span>{isProcessing ? 'Processing...' : 'Explain Code'}</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Side - Explanation */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full">
              {isProcessing ? (
                <LoadingOverlay />
              ) : (
                <CodeExplanation
                  explanations={explanations}
                  onLineClick={handleLineClick}
                  selectedLine={selectedLine}
                  detailedExplanation={detailedExplanation}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CodeExplainPage;