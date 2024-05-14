"use client";

import React from 'react';
import FAQItem from './faq-item';

export default function FAQSection() {
const faqs = [
  {
    question: "What should I bring to my first session at the SGC gym?",
    answer: "Just bring your standard issue gear, a water bottle, and a towel. Leave the rest to us, and be ready for any off-world surprises!"
  },
  {
    question: "How do I schedule training sessions with the SG team?",
    answer: "You can schedule sessions via the internal SGC scheduling system or directly contact the training officer in charge."
  },
  {
    question: "Do you offer group training sessions for new recruits?",
    answer: "Yes, we offer both private and group training sessions. Group sessions are perfect for SG team coordination exercises."
  },
  {
    question: "What types of training programs are available at the SGC?",
    answer: "We offer a range of programs including combat training, alien technology handling, linguistic exercises, and survival tactics."
  },
  {
    question: "Are there trainers specialized in Jaffa combat techniques?",
    answer: "Absolutely! We have trainers experienced with Jaffa combat forms, as well as Asgard and Ancient technology handling."
  },
  {
    question: "Can I change my trainer if I'm more interested in Ancient technology?",
    answer: "Certainly! If you feel another trainer's expertise aligns better with your interests, such as Ancient technology, requests can be accommodated."
  },
  {
    question: "What is the cancellation policy for the Stargate Command gym?",
    answer: "We require a 24-hour notice to cancel a session without charge. Missions and emergencies exempt, though standard debrief is expected for late cancellations."
  },
  {
    question: "Does the SGC provide nutritional advice for off-world missions?",
    answer: "Yes, our dieticians specialize in nutritional plans that cater to both Earth and extraterrestrial environments."
  },
  {
    question: "What safety measures are in place at the SGC training facility?",
    answer: "We adhere to the highest safety protocols, including regular drills and equipment checks to ensure all personnel can handle unexpected situations."
  },
  {
    question: "How long does each combat training session last?",
    answer: "Standard sessions last one hour, but extended sessions are available for advanced combat training or prior to critical missions."
  }
];
  return (
 <div id="faq" className="mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14 font-safari bg-white">
     {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
  </div>
  )
}