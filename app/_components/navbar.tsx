"use client";
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="font-forest fixed top-0 left-0 right-0 z-50 w-full bg-green-500 text-sm py-3 sm:py-0 transition-transform duration-300">
      <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <Link className="flex text-xl gap-2 items-center justify-center font-semibold text-white" href="/" aria-label="Brand">
            <p className="flex-shrink-0 text-[16px] md:text-[20px]">Kuntoäijät</p>
          </Link>
          <div className="sm:hidden">
            <button 
              type="button" 
              className={`hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-green-500 text-green-500 hover:border-green-500 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 ${isOpen ? 'active' : ''}`} 
              onClick={toggleCollapse}
              aria-controls="navbar-collapse-with-animation" 
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div id="navbar-collapse-with-animation" className={`hs-collapse ${isOpen ? 'block' : 'hidden'} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <Link className="font-medium text-green-100 bg-green-500 hover:text-green-700 sm:py-6" href="/">Etusivu</Link>
            <Link className="font-medium text-green-100 bg-green-500 hover:text-green-700 sm:py-6" href="/services">Palvelut</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
