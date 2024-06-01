"use client";

import React, { useState } from 'react';
import ProfileCard from '../_components/profile-card';
import { FaCalendarAlt, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../_components/contact-form';
import ScheduleForm from '../_components/schedule-form';

const profiles = [
  {
    name: 'John Doe',
    phone: '123-456-7890',
    email: 'john.doe@example.com',
    picture: '/profile-1.png',
    title: 'Personal Trainer',
  },
  {
    name: 'Jane Smith',
    phone: '987-654-3210',
    email: 'jane.smith@example.com',
    picture: '/profile-2.png',
    title: 'Nutrition Expert',
  },
];

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <main >
    <div id="form" className="bg-light-dark-transparent text-white font-roboto py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-4 mb-8">
          {profiles.map((profile, index) => (
            <div key={index} className="flex-1 p-4">
              <ProfileCard
                name={profile.name}
                phone={profile.phone}
                email={profile.email}
                picture={profile.picture}
                title={profile.title}
              />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center mb-4 border-b-2 border-gray-300">
            <button
              className={`flex-1 px-4 py-2 rounded-t-lg flex items-center justify-center transition duration-300 ${
                activeTab === 'contact' ? 'bg-secondary text-white border-b-4 border-secondary-dark' : 'bg-gray-100 text-black'
              }`}
              onClick={() => setActiveTab('contact')}
            >
              <FaEnvelope className="mr-2" />
              Ota yhteyttä
            </button>
            <button
              className={`flex-1 px-4 py-2 rounded-t-lg flex items-center justify-center transition duration-300 ${
                activeTab === 'schedule' ? 'bg-secondary text-white border-b-4 border-secondary-dark' : 'bg-gray-100 text-black'
              }`}
              onClick={() => setActiveTab('schedule')}
            >
              <FaCalendarAlt className="mr-2" />
              Varaa aika
            </button>
          </div>
          <div className="p-6 rounded-lg shadow-lg w-full text-black">
            {activeTab === 'contact' ? <ContactForm /> : <ScheduleForm />}
          </div>
        </div>
      </div>
    </div>
    </main>
  );
};

export default Contact;
