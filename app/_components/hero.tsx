"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [isFirstLoad, setIsFirstLoad] = useState(sessionStorage.getItem("animate-hero"));
  useEffect(() => {
    if (!window || !sessionStorage) return

    const localStorageValue = sessionStorage.getItem("animate-hero");
    if (!localStorageValue) sessionStorage.setItem('animate-hero', 'true');
    if (isFirstLoad === "true") setIsFirstLoad("false");


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <section
      id="hero"
      className="text-green-100 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero-1.png")`,
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <div className="container flex px-5 py-24 pt-56 md:flex-row flex-col items-center justify-center md:justify-start">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-14 md:mb-0 items-center text-center">
          <h1
            className={`sm:text-2xl text-3xl lg:text-8xl mb-4 text-secondary ${isFirstLoad ? "animate-slideInRight" : ""
              }`}
          >
            Anna kuntosi kohota
          </h1>
          <p
            className={`mb-10 leading-relaxed lg:text-2xl opacity-0 ${isFirstLoad ? "animate-slideDown" : ""
              }`}
            style={{
              animationDelay: isFirstLoad ? "0.75s" : "0s",
              animationFillMode: "forwards",
              opacity: isFirstLoad ? "0" : "1",
            }}
          >
            Tilaa personalisoitu treeniohjelma ja saavuta paras itsesi!
          </p>
          <div className="flex justify-center md:justify-start gap-6">
            <Link
              href="#service-info-block "
              className={`inline-flex text-#333333 border border-secondary py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 ${isFirstLoad ? "animate-slideInLeft" : ""
                } hover:bg-secondary hover:text-white transition-colors duration-500 ease-in-out`}
              style={{
                animationDelay: isFirstLoad ? "0.8s" : "0s",
                animationFillMode: "forwards",
                opacity: isFirstLoad ? "0" : "1",
              }}
            >
              <p className="text-center">Palvelut</p>
            </Link>
            <Link
              href="/contact"
              className={`inline-flex text-#333333 border border-secondary py-2 px-6 md:py-3 md:px-8 focus:outline-none rounded text-lg md:text-3xl opacity-0 ${isFirstLoad ? "animate-slideInRight" : ""
                } hover:bg-secondary hover:text-white transition-colors duration-500 ease-in-out`}
              style={{
                animationDelay: isFirstLoad ? "0.8s" : "0s",
                animationFillMode: "forwards",
                opacity: isFirstLoad ? "0" : "1",
              }}
            >
              <p className="text-center">Yhteystiedot</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-2 bg-gradient-to-r from-secondary/0 via-secondary to-secondary/0"></div>
    </section>
  );
}
