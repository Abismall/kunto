"use client";
import Hero from "@components/ui/hero";
import ProfileStripe from "./components/profile-stripe";
import SingleTraining from "./components/single-training";
import GroupTraining from "./components/group-training";
import Section from "./components/ui/section";

export default function Page() {
  return (
    <>
      <div>
        <Hero
          rowbar={[
            { href: "#yksilovalmennukset", title: "Yksilövalmennukset" },
            { href: "#ryhmavalmennukset", title: "Ryhmävalmennukset" },
            { href: "#yrityspalvelut", title: "Yrityspalvelut" },
          ]}
        />

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
      </div>
    </>
  );
}
