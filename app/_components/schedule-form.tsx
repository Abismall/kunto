"use client";

import React from 'react';
import { FaCalendarAlt, FaClock, FaUser } from 'react-icons/fa';

export default function ScheduleForm() {
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
          <label htmlFor="date" className="block text-dark text-sm font-bold mb-2 flex items-center">
            <FaCalendarAlt className="mr-2 text-secondary" /> Päivämäärä
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline border-gray-300"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="time" className="block text-dark text-sm font-bold mb-2 flex items-center">
            <FaClock className="mr-2 text-secondary" /> Aika
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline border-gray-300"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-secondary-dark"
          >
            Varaa aika
          </button>
        </div>
      </form>
    </div>
  );
}
