"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
<section
  id="hero"
  className="text-green-100 font-forest"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("/hero-1.png")`,
    backgroundSize: 'cover',
     backgroundPosition: 'center 10%',
    height: '100vh', 
  }}
>
  <div className="container mx-auto flex px-5 py-24 pt-64 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-100">Anna kuntosi kohota</h1>
      <p className="mb-8 leading-relaxed">
        Tilaa personalisoitu treeniohjelma ja saavuta paras itsesi!
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/"
          className="inline-flex text-#333333  border border-[#319415] py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-[#319415]/50"
        >
          <p>Lue lisää</p>
        </Link>
        <Link
          href="/"
          className="inline-flex text-#333333 border border-[#319415] py-2 px-6 focus:outline-none rounded text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:shadow-[#319415]/50"
        >
          <p>Ota yhteyttä</p>
        </Link>
      </div>
    </div>
  </div>
</section>


  )
}
