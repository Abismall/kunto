"use client";
import Hero from "@components/ui/hero";
import ProfileStripe from "./components/profile-stripe";
import ServiceDisplayExpandableCards from "./components/service-expandable-card-display";
import ServiceDisplayModals from "./components/service-modal-display";
import ServiceDisplayBasic from "./components/service-basic-display";

import Section from "./components/ui/section";
import Lamp from "./components/lamp";

export default function Page() {
  return (
    <>
      <Hero />
      <Lamp upperText={`Health and happiness.`} lowerText={`The right way.`} />

      <div className="mx-auto">
        <ProfileStripe />
      </div>

      <Section
        id="ryhmavalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <ServiceDisplayBasic />
      </Section>

      <Section
        id="yksilovalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <ServiceDisplayExpandableCards />
      </Section>

      <Section
        id="ryhmavalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <ServiceDisplayModals />
      </Section>
    </>
  );
}
