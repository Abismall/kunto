"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { TextGenerateEffect } from "../text-generate-effect";

const Skeleton = () => {
  return (
    <div className="fullwidth">
      <div className="relative w-full h-screen">
        <Image
          src="/treadmill-in-modern-gym.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-10"
        />
        <div
          className="absolute inset-0 z-20"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
          }}
        />
        <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0" />
      </div>
    </div>
  );
};

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return <Skeleton />;
  else
    return (
      <div className="fullwidth">
        <section id="hero" className="relative">
          <div className="relative text-primary w-full h-screen">
            <Image
              src="/treadmill-in-modern-gym.jpg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="z-10"
            />
            <div
              className="absolute inset-0 z-20"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))`,
              }}
            />
            <div className="container flex px-5 pt-28 md:pt-56 md:flex-row flex-col items-center justify-center md:justify-start mx-auto relative z-30">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center">
                <div className="text-container">
                  <h3 className="text-6xl text-primary-dark opacity-0 animate-slideDown">
                    Ipsum dolor sit amet.
                  </h3>
                  <div className="flex flex-col justify-center pt-4 md:justify-start gap-6 w-[20rem] links-container">
                    <Link
                      href="#services"
                      className={`inline-flex border border-primary-dark py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 animate-slideInLeft hover:bg-primary-dark hover:text-white transition-colors duration-500 ease-in-out link`}
                    >
                      <p className="text-center w-full">Palvelut</p>
                    </Link>
                    <Link
                      href="/contact"
                      className={`inline-flex border border-primary-dark py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 animate-slideInRight hover:bg-primary-dark hover:text-white transition-colors duration-500 ease-in-out link`}
                    >
                      <p className="mx-auto">Ajanvaraus</p>
                    </Link>
                  </div>
                  <p>
                    <TextGenerateEffect
                      filter={true}
                      duration={1}
                      delay={0.01}
                      className="text-sm"
                      words={
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                      }
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-white/0 via-primary to-primary/100 z-20" />
        </section>

        <style jsx>{`
          @media (min-width: 768px) {
            .links-container {
              margin-top: 2rem;
              width: 50rem;
            }
            .text-container {
              max-width: 820px; /* Set your desired max-width */
            }
          }
        `}</style>
      </div>
    );
}
