"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black/10 to-black/10">
      <div className="fullwidth ">
        <div className="grid grid-cols-1">
          <div className="pb-4 pt-4">
            <h5 className="flex justify-center text-lg font-semibold">Seuraa</h5>
            <div className="flex justify-center space-x-4">
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
