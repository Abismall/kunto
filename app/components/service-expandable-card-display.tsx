import React from "react";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning } from "react-icons/fa";
import { ExpandableCard } from "./expandable-card";

const cards = [
  {
    description: "Henkilökohtainen treeniohjelma 8 viikkoa xx€",
    title: "Henkilökohtainen treeniohjelma",
    src: <FaDumbbell className="text-6xl" />,
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => (
      <p>
        Sisältää kaksi ohjattua treeniä missä liikkeet käydään lävitse (Hintaan
        lisätään valitun salin käyntimaksut). Ohjelmaa muokataan etenemisen
        mukaan.
      </p>
    ),
  },
  {
    description: "Henkilökohtainen elämäntapavalmennus 1kk xx€",
    title: "Henkilökohtainen elämäntapavalmennus",
    src: <FaHeartbeat className="text-6xl" />,
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => (
      <p>
        Ohjattavalle luodaan elämäntilanteeseen sopivat tavoitteet liikunnan,
        ravitsemuksen ja palautumisen suhteen. Valmennuksen tavoitteena on luoda
        arkeen hyvinvointia tukevia rutiineja lähtötason mukaisesti.
      </p>
    ),
  },
  {
    description: "Ohjattu treeni xx€/h",
    title: "Ohjattu treeni",
    src: <FaRunning className="text-6xl" />,
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => <p>Hintaan lisätään valitun salin käyntimaksut.</p>,
  },
  {
    description: "Henkilökohtainen ravinto-ohjelma 12 viikkoa xx€",
    title: "Henkilökohtainen ravinto-ohjelma",
    src: <FaAppleAlt className="text-6xl" />,
    ctaText: "Learn More",
    ctaLink: "#",
    content: () => (
      <p>Sisältää kahden viikon välein ohjelman muokkaamisen tarvittaessa.</p>
    ),
  },
];

const ServiceDisplayExpandableCards: React.FC = () => {
  return (
    <div>
      <ExpandableCard cards={cards} />
    </div>
  );
};

export default ServiceDisplayExpandableCards;
