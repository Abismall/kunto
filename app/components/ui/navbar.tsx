'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState<'up' | 'down'>('up');
  const [previous, setPrevious] = useState(0)
  useEffect(() => {
    const handler = () => {
      setDirection(window.scrollY > previous ? 'down' : 'up')
      setPrevious(window.scrollY)
    }
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [previous]);
 
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-gradient-to-r from-secondary/80 via-secondary/100 to-secondary/80 transition-transform duration-300 ${previous <= 0 ? 'translate-y-0' : direction === 'up' && previous >= 0 ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div
        className='relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center justify-between w-full'>
          <Link
            className={`flex text-2xl gap-2 items-center justify-center font-semibold text-white ${isOpen ? 'hidden sm:flex' : 'flex'
              }`}
            href='/'
            aria-label='Brand'
          >
            <p className='flex-shrink-0 text-2xl shadow-lg'>Kuntoäijät</p>
          </Link>
          <div className='sm:hidden'>
            <button
              type='button'
              className={`hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-white ${isOpen ? 'active' : ''
                }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-controls='navbar-collapse-with-animation'
              aria-label='Toggle navigation'
            >
              {isOpen ? (
                <svg
                  className='flex-shrink-0 size-4 fixed right-5'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 6L6 18'></path>
                  <path d='M6 6l12 12'></path>
                </svg>
              ) : (
                <svg
                  className='flex-shrink-0 size-4'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='3' y1='6' x2='21' y2='6'></line>
                  <line x1='3' y1='12' x2='21' y2='12'></line>
                  <line x1='3' y1='18' x2='21' y2='18'></line>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          id='navbar-collapse-with-animation'
          className={`hs-collapse ${isOpen ? 'flex' : 'hidden'} flex-col items-center justify-center h-screen w-full overflow-y-auto transition-all duration-300 basis-full grow sm:block sm:h-auto sm:overflow-visible`}
        >
          <div className='flex flex-col items-center gap-y-4 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-x-7 sm:mt-0 sm:ps-7'>
            <Link
              onClick={() => setIsOpen(false)}
              className='text-white hover:text-highlight sm:py-3 px-3 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105'
              href='/'
            >
              <p className='flex-shrink-0 text-2xl shadow-lg'>Etusivu</p>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className='text-2xl text-white hover:text-highlight sm:py-3 px-3 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105'
              href='/#services'
            >
              <p className='flex-shrink-0 text-2xl shadow-lg'>Palvelut</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;