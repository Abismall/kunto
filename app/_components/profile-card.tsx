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
    <div className="border border-secondary rounded-lg shadow-lg h-full flex flex-col items-center p-6 transition-transform transform hover:scale-105">
      <h3 className="text-2xl font-forest mb-2" >{name}</h3>
      <div className="w-36 h-36 bg-primary rounded-full flex items-center justify-center mb-4">
        <Image
          src={picture}
          alt={name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="flex items-center mb-2 w-full px-6">
        <FaPhoneAlt className="mr-2 text-secondary" />
        <span className="ml-2">{phone}</span>
      </div>
      <div className="flex items-center w-full px-6">
        <FaEnvelope className="mr-2 text-secondary" />
        <span className="ml-2">{email}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
