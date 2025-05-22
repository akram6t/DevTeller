import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_APIKEY });

export async function explainByAi(code) {

    const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [
            {
                role: 'model',
                parts: [{ text: `${GEMINI_SYSTEM_PROMPT}` }]
            },
            {
                role: 'user',
                parts: [{ text: `${code}` }]
            }
        ],
        generationConfig: {
            response_mime_type: "application/json" // Force JSON response
        }
    });

    const result = response.candidates[0].content.parts[0].text;    

    // if(result.startsWith('```json')){
    //     result.replace('```json', '');
    // }
    // if(result.endsWith('```')){
    //     result.replace('```', '');
    // }    

    return JSON.parse(result);
}


// const GEMINI_SYSTEM_PROMPT = `
// When User give you code you can explain line by line and give me json array and each object look like {line: number, code: string, explanation: string, detailedText: string}

// You are a JSON output generator. You MUST ONLY return raw JSON output without any additional formatting, explanations, or Markdown wrappers.

// restrcited: return EXACTLY this format without any wrapping text Not Different:
// [
//   { 
//       line: 1, 
//       code: 'function calculateFactorial(n) {', //code 
//       explanation: 'This line defines a new function named "calculateFactorial" that takes a single parameter "n".', // accurate small explanation maxumum 30 words
//       detailedText: 'This is the function declaration in JavaScript. The "function" keyword is used to define a new function. "calculateFactorial" is the function name, and "n" is the parameter that will be passed to the function. The curly brace "{" opens the function body.'
//   },
//   { 
//       line: 2, 
//       code: '  if (n === 0 || n === 1) {', 
//       explanation: 'This is a conditional statement that checks if n equals 0 or 1, which are the base cases for the factorial calculation.',
//       detailedText: 'The "if" statement checks two conditions using the logical OR operator (||). The strict equality operator (===) ensures both value and type match. This is the base case for the recursive function, which stops the recursion when n is 0 or 1.'
//   }
// ]

// RULES:
// 1. NEVER use Markdown (no \`\`\`json or \`\`\` wrappers)
// 2. NEVER add any text outside the JSON structure
// 3. The response must be parseable as JSON directly
// 4. Include every line of code exactly as it appears
// 5. If you break these rules, you will cause system errors
// 6. Don't use \`\`\`json and \`\`\` in End 
// `;


const GEMINI_SYSTEM_PROMPT = `
You are a code explanation API that ONLY returns raw JSON output. Your responses must:

1. Be valid JSON parsable by JSON.parse()
2. Contain NO Markdown syntax (no \`\`\`json or \`\`\` wrappers)
3. Have NO additional text before or after the JSON
4. Follow EXACTLY this format:

[
  { 
      "line": 1, 
      "code": "function example() {",
      "explanation": "Brief explanation",
      "detailedText": "Detailed explanation" 
  }
]

BAD EXAMPLE (NEVER DO THIS):
\`\`\`json
[{"line": 1, ...}]
\`\`\`

GOOD EXAMPLE (ALWAYS DO THIS):
[{"line": 1, ...}]

The user will provide code. Analyze it line by line and return your explanation in the specified JSON format with NO WRAPPERS or EXTRA TEXT.
`;