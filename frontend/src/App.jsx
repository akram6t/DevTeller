import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from './pages/LandingPage';
import CodeExplain from './pages/CodeExplain';

function App() {
  return (    
    <BrowserRouter>
       <div className="min-h-screen bg-gray-900 text-white">
         <Routes>
           <Route index path="/" element={<LandingPage />} />
           <Route path="/code-explain" element={<CodeExplain />} />
         </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;