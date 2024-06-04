"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PermissionCookie, CookieDispatchEvent } from "./cookie-consent";

export default function Hero() {
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => {
    const callback = () => setIsHidden(false)
    if (typeof window !== undefined && window.localStorage.getItem(PermissionCookie)) window.addEventListener(CookieDispatchEvent, callback);
    else callback();
    return () => window.removeEventListener(CookieDispatchEvent, callback);

  }, []);


  if (isHidden) {
    return (
      <div className="fullwidth">
        <section
          id="hero"
          className="text-green-100 relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero-1.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        >
          <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0" />
        </section>

      </div>
    )
  }
  return (
    <div className="fullwidth">
      <section
        id="hero"
        className="text-green-100 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero-1.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <div className="container flex px-5 py-24 pt-56 md:flex-row flex-col items-center justify-center md:justify-start mx-auto">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center">
            <h1
              className={`sm:text-2xl text-3xl lg:text-8xl mb-4 text-primary-light animate-slideDown
                }`}
            >
              Anna kuntosi kohota
            </h1>

            <div className="flex flex-col justify-center md:justify-start gap-6 w-[20rem] links-container">
              <Link
                href="#services"
                className={`inline-flex text-#333333 border border-secondary py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 animate-slideInLeft hover:bg-secondary hover:text-white transition-colors duration-500 ease-in-out link`}
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
                className={`inline-flex text-#333333 border border-secondary py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 animate-slideInRight hover:bg-secondary hover:text-white transition-colors duration-500 ease-in-out link`}
                style={{
                  animationDelay: "0.8s",
                  animationFillMode: "forwards",
                  opacity: "0",
                }}
              >
                <p className="mx-auto">Yhteystiedot</p>
              </Link>
            </div>
            <div className="text-container">
              <p
                className={`mt-4 lg:text-2xl opacity-0 animate-slideDown`}
                style={{
                  animationDelay: "0.75s",
                  animationFillMode: "forwards",
                  opacity: "0",
                }}
              >
                {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0" />
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
