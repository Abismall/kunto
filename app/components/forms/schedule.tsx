"use client";

import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUser, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export default function ScheduleForm() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const daysInMonth = getDaysInMonth(date.getFullYear(), date.getMonth());
  const firstDayOfMonth = getFirstDayOfMonth(date.getFullYear(), date.getMonth());

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(date.getFullYear(), date.getMonth(), day));
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          className={`calendar-day ${selectedDate && selectedDate.getDate() === day ? 'selected' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          {day}
        </div>
      );
    }
    // Fill the remaining cells to ensure the calendar always has 6 rows
    const totalCells = firstDayOfMonth + daysInMonth;
    const remainingCells = 42 - totalCells; // 42 cells for 6 weeks (6 * 7)
    for (let i = 0; i < remainingCells; i++) {
      days.push(<div key={`remaining-${i}`} className="calendar-day empty"></div>);
    }
    return days;
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="calendar-container bg-white rounded-lg shadow-lg p-4 w-full max-w-3xl">
        <div className="calendar-header flex justify-between items-center mb-4">
          <button onClick={handlePrevMonth} className="calendar-nav text-lg">
            <FaChevronLeft />
          </button>
          <h2>{date.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h2>
          <button onClick={handleNextMonth} className="calendar-nav text-lg">
            <FaChevronRight />
          </button>
        </div>
        <div className="calendar-grid grid grid-cols-7 gap-2 min-h-[400px]">
          {['Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'].map((day) => (
            <div key={day} className="calendar-day-name text-center font-bold py-2 bg-gray-100">
              {day}
            </div>
          ))}
          {renderCalendarDays()}
        </div>
      </div>

      {selectedDate && (
        <div className="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="overlay-content bg-white p-8 rounded-lg shadow-lg relative w-full max-w-lg">
            <h3 className="text-lg font-bold mb-4">{selectedDate.toLocaleDateString()}</h3>
            <form className="w-full grid grid-cols-1 gap-6">
              <div className="grid grid-cols-1 gap-2 items-center">
                <label htmlFor="name" className="text-dark text-sm font-bold flex items-center">
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
              <div className="grid grid-cols-1 gap-2 items-center">
                <label htmlFor="date" className="text-dark text-sm font-bold flex items-center">
                  <FaCalendarAlt className="mr-2 text-secondary" /> Päivämäärä
                </label>
                <input
                  type="text"
                  id="date"
                  name="date"
                  value={selectedDate.toLocaleDateString()}
                  readOnly
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                />
              </div>
              <div className="grid grid-cols-1 gap-2 items-center">
                <label htmlFor="time" className="text-dark text-sm font-bold flex items-center">
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
            <button onClick={() => setSelectedDate(null)} className="overlay-close absolute top-4 right-4 text-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
