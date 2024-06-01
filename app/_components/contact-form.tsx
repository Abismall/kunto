"use client";

import React from 'react';
import { FaUser, FaEnvelope, FaComment } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full">
      <form className="w-full">
        <div className="mb-6">
          <label htmlFor="name" className="block text-dark text-sm font-bold mb-2 flex items-center">
            <FaUser className="mr-2 text-secondary" /> Nimi
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline border-gray-300"
            placeholder="Nimesi"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-dark text-sm font-bold mb-2 flex items-center">
            <FaEnvelope className="mr-2 text-secondary" /> Sähköposti
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline border-gray-300"
            placeholder="Sähköpostiosoitteesi"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-dark text-sm font-bold mb-2 flex items-center">
            <FaComment className="mr-2 text-secondary" /> Viesti
          </label>
          <textarea
            id="message"
            name="message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline border-gray-300"
            placeholder="Kirjoita viestisi tähän"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-secondary-dark"
          >
            Lähetä
          </button>
        </div>
      </form>
    </div>
  );
}
