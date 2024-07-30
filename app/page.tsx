"use client";
import Hero from "@components/ui/hero";
import ProfileStripe from "./components/profile-stripe";
import SingleTraining from "./components/single-training";
import GroupTraining from "./components/group-training";
import Section from "./components/ui/section";
import Lamp from "./components/lamp";

export default function Page() {
  return (
    <>
      <Hero />

      <Lamp upperText={`Health and happines.`} lowerText={`The right way.`} />
      <div className="mx-auto">
        <ProfileStripe />
      </div>

      <Section
        id="yksilovalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <SingleTraining />
      </Section>
      <Section
        id="ryhmavalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <GroupTraining />
      </Section>
    </>
  );
}
