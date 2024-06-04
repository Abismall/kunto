"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-secondary-dark mt-auto pt-4 sm:pt-10 lg:pt-12 pb-4 sm:pb-10 lg:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">Seuraa</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Facebook</a>
              <a href="#" className="text-sm hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Twitter</a>
              <a href="#" className="text-sm hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105">Instagram</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
