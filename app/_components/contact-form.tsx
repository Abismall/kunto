"use client";

import React from 'react';

export default function ContactForm() {
  return (
<section id="contact-form-section">
  <div id="form" className="bg-white font-safari py-6 sm:py-8 lg:py-12">
    <div className="container mx-auto px-4">
    
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-black text-sm font-bold mb-2">Nimi</label>
          <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-[#e03e00] leading-tight focus:outline-none focus:shadow-outline border-black" placeholder="Nimesi" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-black text-sm font-bold mb-2">Sähköposti</label>
          <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-[#e03e00] leading-tight focus:outline-none focus:shadow-outline border-black" placeholder="Sähköpostiosoitteesi" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-black text-sm font-bold mb-2">Viesti</label>
          <textarea id="message" name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-[#e03e00] leading-tight focus:outline-none focus:shadow-outline border-black" placeholder="Kirjoita viestisi tähän" ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-[#357a38] text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#357a28]">Lähetä</button>
        </div>
      </form>
    </div>
  </div>
</section>


  )
}