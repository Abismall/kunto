"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardContainer, CardBody, CardItem } from "./3d-card";

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
          <CardContainer className="inter-var" key={`trainer-${index}`}>
            <CardBody className="bg-light relative group/card border-primary-dark w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-secondary-dark"
              >
                {trainer.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-dark text-sm max-w-sm mt-2"
              >
                {trainer.description}
              </CardItem>
              <CardItem translateZ="40" className="w-full mt-4">
                <Image
                  src={trainer.picture}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href=""
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-secondary-dark"
                >
                  {trainer.email}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-buttons text-white text-xs font-bold"
                >
                  {trainer.title}
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default ProfileStripe;
