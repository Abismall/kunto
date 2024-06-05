import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './card.css';
interface ProfileCardProps {
  name: string;
  phone: string;
  email: string;
  picture: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, phone, email, picture, title }) => {
  return (
    <div className="profile-card">
      <div className="profile-picture">
        <Image
          src={picture}
          alt={name}
          width={150}
          height={150}
          priority
          className="rounded-full"
        />
      </div>
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-title">{title}</p>
        <div className="profile-info-icon-container">
          <FaPhoneAlt className="profile-info-icon" />
          <span>{phone}</span>
        </div>
        <div className="profile-info-icon-container">
          <FaEnvelope className="profile-info-icon" />
          <span>{email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
