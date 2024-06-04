// Contact.tsx
"use client";

import React from 'react';
import ProfileCard from '@components/profile/card';
import { FaCalendarAlt } from 'react-icons/fa';
import ScheduleForm from '@components/forms/schedule';
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
  return (
    <div className="py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            phone={profile.phone}
            email={profile.email}
            picture={profile.picture}
            title={profile.title}
          />
        ))}
      </div>
      <div className="flex justify-center text-xl text-dark mb-4">
        <FaCalendarAlt className="text-secondary mr-2" />
        Ajanvaraus
      </div>
      <div className="flex justify-center mb-6">
        <ScheduleForm />
      </div>
    </div>
  );
};

export default Contact;
