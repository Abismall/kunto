import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="py-8 first:pt-0 last:pb-0">
    <div className="flex gap-x-5">
      <svg className="flex-shrink-0 mt-1 size-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
        <path d="M12 17h.01"></path>
      </svg>
      <div>
        <h3 className="md:text-lg font-semibold text-yellow-500">{question}</h3>
        <p className="mt-1 text-gray-500">{answer}</p>
      </div>
    </div>
  </div>
);

export default FAQItem;
