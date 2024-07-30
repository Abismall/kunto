"use client";

import Image from "next/image";
import React from "react";

interface Trainer {
  name: string;
  phone: string;
  email: string;
  picture: string;
  title: string;
  description: string;
}

const trainers: Trainer[] = [
  {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    picture: "/profile-1.png",
    title: "Personal Trainer",
    description:
      "John has over 10 years of experience in personal training and specializes in strength training and bodybuilding.",
  },
  {
    name: "Jane Smith",
    phone: "987-654-3210",
    email: "jane.smith@example.com",
    picture: "/profile-2.png",
    title: "Nutrition Expert",
    description:
      "Jane is a certified nutritionist with a passion for helping people achieve their health goals through proper diet and nutrition.",
  },
];

const ProfileStripe: React.FC = () => {
  return (
    <div className="relative w-full flex items-center justify-center py-2">
      <div
        className="absolute w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/small-weights.jpg)" }}
      />
      <div className="relative w-full max-w-6xl mx-auto flex flex-wrap justify-around space-y-6 md:space-y-0 md:space-x-6 px-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg p-4 rounded-lg shadow-lg text-center w-full md:w-1/2 lg:w-1/3 relative z-10 border border-secondary"
          >
            <Image
              src={trainer.picture}
              alt={trainer.name}
              width={80}
              height={80}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{trainer.name}</h2>
            <p className="text-gray-600 mb-4">{trainer.title}</p>
            <p className="text-gray-700">{trainer.description}</p>
            <p className="text-gray-700 mt-2">
              <strong>Phone:</strong> {trainer.phone}
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> {trainer.email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileStripe;
