import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

interface ProfileCardProps {
  name: string;
  phone: string;
  email: string;
  picture: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, phone, email, picture, title }) => {
  return (
    <div className="profile-card rounded-lg w-full flex flex-col items-center p-4 bg-white shadow-lg">
      <div className="profile-picture mb-4">
        <Image
          src={picture}
          alt={name}
          width={80}
          height={80}
          priority
          className="rounded-full object-cover"
        />
      </div>
      <div className="profile-info text-center">
        <h3 className="profile-name text-xl font-bold mb-1">{name}</h3>
        <p className="profile-title text-sm text-gray-500 mb-2">{title}</p>
        <div className="contact-info flex items-center justify-center mb-1">
          <FaPhoneAlt className="profile-info-icon mr-2 text-gray-400" />
          <span className="text-gray-600">{phone}</span>
        </div>
        <div className="contact-info flex items-center justify-center">
          <FaEnvelope className="profile-info-icon mr-2 text-gray-400" />
          <span className="text-gray-600">{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
