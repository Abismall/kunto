"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-400 via-gray to-secondary-dark text-typography py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1">
          <div className="pb-4 pt-4">
            <h2 className="flex justify-center p-6 text-typography">
              Löydät meidät myös sosiaalisesta mediasta
            </h2>
            <div className="flex justify-center space-x-4">
              <a
                href="#"
                className="text-sm text-typography hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-typography hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-typography hover:text-highlight transition duration-300 ease-in-out transform hover:scale-105"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
