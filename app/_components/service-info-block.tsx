"use client";

import React, { useState } from 'react';

export interface ServiceInfoBlockItem {
  imageUrl: string;
  btnText: string;
  title: string;
  description: string;
}

const ServiceInfoBlock: React.FC<ServiceInfoBlockItem> = ({ imageUrl, title, description, btnText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-80 h-80 mt-4 bg-cover bg-center shadow-lg m-auto rounded overflow-hidden group border border-secondary border-radius"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-80"></div>

      <div className="relative z-10 p-4 flex flex-col justify-center h-full">
        <div className="text-center">
          <h3
            className={`text-2xl font-semibold text-green-100 text-shadow transition-transform duration-300 ${
              isHovered ? 'animate-shrink' : 'animate-expand'
            }`}
            style={{ textShadow: '12px 2px 12px rgba(0, 0, 0, 1)' }}
          >
            {title}
          </h3>
          <hr className={`mt-2 mb-2 w-20 h-1 mx-auto bg-yellow-500 border-none transition-transform ${
            isHovered ? 'duration-300 animate-shrink' : 'duration-150 animate-expand'
          }`} />
        </div>
        <div className="text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-primary-light text-sm">{description}</p>
          <button className="mt-8 px-4 bg-secondary text-white hover:bg-secondary-dark transition-colors">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoBlock;
