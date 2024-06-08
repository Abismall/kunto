"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer >
      <div className="fullwidth">
        <div className="grid grid-cols-1">
          <div className="pb-4 pt-4">
            <h2 className='flex justify-center p-6 text-dark'>Löydät meidät myös sosiaalisesta mediasta</h2>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-sm text-secondary hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Facebook</a>
              <a href="#" className="text-sm text-secondary hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Twitter</a>
              <a href="#" className="text-sm text-secondary hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Instagram</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
