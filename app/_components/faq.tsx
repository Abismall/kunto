"use client"
import React, { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-8 border-b border-gray-200 last:border-b-0">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-start justify-between w-full text-left">
        <div className="flex gap-x-5">
          <svg className="flex-shrink-0 mt-1 w-6 h-6 text-primary-light" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path>
          </svg>
          <h3 className="md:text-lg font-semibold text-white">{question}</h3>
        </div>
        <svg className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div className={`mt-4 overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}>
        <p className="text-highlight">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;
