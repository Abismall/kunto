"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PermissionCookie, DispatchEvent } from "./cookie-consent";
import { HiChevronDoubleDown, HiChevronDoubleUp } from "react-icons/hi";

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

type RowBarProps = {
  href: string;
  title: string;
};

type HeroProps = {
  rowbar: RowBarProps[];
};

export default function Hero({ rowbar }: HeroProps) {
  const [show, setShow] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [isWideScreen, setIsWideScreen] = useState(false);

  const toggleReadMore = () => {
    if (direction === "down") window.scrollTo({ top: 670, behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const callback = () => setShow(true);

    if (window.localStorage.getItem(PermissionCookie)) callback();
    else window.addEventListener(DispatchEvent.CookieConsentAdded, callback);

    return () =>
      window.removeEventListener(DispatchEvent.CookieConsentAdded, callback);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY < 670) setDirection("down");
      else setDirection("up");
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  useEffect(() => {
    if (window) {
      setIsWideScreen(window.innerWidth >= 1440);
    }
    const resizeHandler = () => {
      setIsWideScreen(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  if (!show) return <Skeleton />;
  else
    return (
      <div className="fullwidth">
        <section id="hero" className="relative">
          <div className="relative text-primary-light w-full h-screen">
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
            <div className="container flex px-5 py-24 pt-56 md:flex-row flex-col items-center justify-center md:justify-start mx-auto relative z-30">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center">
                <h1
                  className={`sm:text-2xl text-3xl lg:text-8xl mb-4 animate-slideDown`}
                >
                  Ipsum dolor sit amet
                </h1>

                <div className="flex flex-col justify-center md:justify-start gap-6 w-[20rem] links-container">
                  <Link
                    href="#services"
                    className={`inline-flex border border-secondary py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 animate-slideInLeft hover:bg-secondary-dark hover:text-white transition-colors duration-500 ease-in-out link`}
                    style={{
                      animationDelay: "0.8s",
                      animationFillMode: "forwards",
                      opacity: "0",
                    }}
                  >
                    <p className="text-center w-full">Palvelut</p>
                  </Link>
                  <Link
                    href="/contact"
                    className={`inline-flex border border-secondary py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 animate-slideInRight hover:bg-secondary-dark hover:text-white transition-colors duration-500 ease-in-out link`}
                    style={{
                      animationDelay: "0.8s",
                      animationFillMode: "forwards",
                      opacity: "0",
                    }}
                  >
                    <p className="mx-auto">Ajanvaraus</p>
                  </Link>
                </div>
                <div className="text-container">
                  <p
                    className={`mt-4 lg:text-2xl opacity-0 animate-slideDown text-typography`}
                    style={{
                      animationDelay: "0.75s",
                      animationFillMode: "forwards",
                      opacity: "0",
                    }}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    }
                  </p>
                </div>
                <div
                  className="flex flex-col md:flex-row justify-center md:justify-start mt-10 space-y-4 md:space-y-0 md:space-x-4 animate-slideDown lg:animate-slideInLeft"
                  style={{
                    animationDelay: "0.95s",
                    animationFillMode: "forwards",
                    opacity: "0",
                  }}
                >
                  {rowbar.map((button, index) => (
                    <Link
                      key={index}
                      href={button.href}
                      className="inline-flex border border-secondary py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl hover:bg-secondary hover:text-white transition-colors duration-500 ease-in-out"
                    >
                      {button.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={`absolute ${isWideScreen ? "bottom-5" : "bottom-10"} left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30`}
            >
              <button
                onClick={toggleReadMore}
                className="flex flex-col items-center justify-center"
              >
                {direction === "up" ? (
                  <span
                    className="animate-slideDownDelayed"
                    style={{
                      animationDelay: "1s",
                      animationFillMode: "forwards",
                      opacity: "0",
                    }}
                  >
                    <HiChevronDoubleUp
                      className={`w-8 h-8 mx-auto text-secondary`}
                    />
                    <p className="text-lg md:text-2xl mt-2 text-secondary">
                      Lue lisää
                    </p>
                  </span>
                ) : (
                  <span
                    className="animate-slideDownDelayed"
                    style={{
                      animationDelay: "1s",
                      animationFillMode: "forwards",
                      opacity: "0",
                    }}
                  >
                    <p className="text-lg md:text-2xl mb-2 text-secondary">
                      Lue lisää
                    </p>
                    <HiChevronDoubleDown
                      className={`w-8 h-8 mx-auto text-secondary`}
                    />
                  </span>
                )}
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-white/0 via-secondary to-secondary/100 z-20" />
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
