"use client";
import Hero from "@components/ui/hero";
import ProfileStripe from "./components/profile-stripe";

import Section from "./components/ui/section";
import Lamp from "./components/lamp";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./components/modal";
import {
  FaAppleAlt,
  FaBriefcase,
  FaDumbbell,
  FaHeartbeat,
  FaRunning,
  FaUsers,
} from "react-icons/fa";
import { ExpandableCardCollection } from "./components/expandable-cards";
const cards2 = [
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
const cards = [
  {
    title: "Nuorten lihasvoimatreenin alkeet",
    duration: "8 viikkoa xx€",
    icon: <FaUsers className="text-primary text-3xl mr-3" />,
    description: (
      <>
        <p className="mb-4 text-lg text-typography">
          Kurssilla ohjataan nuorta treenaamaan turvallisesti, kehitetään
          motoriikkaa ja lihashallintaa sekä tutustutaan kuntosaliharjoittelun
          perusliikkeisiin
        </p>
        <ul className="list-disc list-inside mb-4 text-lg text-typography">
          <li>Ohjatut treenit kahdesti viikossa</li>
        </ul>
      </>
    ),
  },
  {
    title: "Jaksamista arkeen",
    duration: "12 viikkoa xx€",
    icon: <FaRunning className="text-primary text-3xl mr-3" />,
    description: (
      <>
        <p className="mb-4 text-lg text-typography">
          Kurssi on suunnattu henkilöille, jotka kokevat haastetta rakentaa
          arkeensa jaksamista tukevia rutiineja.
        </p>
        <p className="text-lg text-typography">
          Kurssilla annetaan viikoittaiset liikuntatavoitteet,
          ravitsemustavoitteet sekä palautumistavoitteet. Annettujen
          tavoitteiden täyttämiseksi rakennetaan työkaluja ja pyritään
          opastamaan osallistujaa löytämään mielekkäitä tapoja rakentaa
          itsellensä tasapainoinen arki
        </p>
      </>
    ),
  },
  {
    title: "YRITYSPALVELUT",
    icon: <FaBriefcase className="text-primary text-3xl mr-3" />,
    description: (
      <>
        <p className="mb-4 text-lg text-typography">
          Toteutamme yrityksille tyky-päiviä sekä työkykyä tukevia
          hyvinvointikampanjoita. Palvelu koostetaan tilaajan henkilöstömäärän
          ja tarpeen mukaan. Pyydä tarjous yhteydenottolomakkeella.
        </p>
        <p className="text-lg font-bold text-typography">
          Suosittuja tyky-päiväohjelmia:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg text-typography">
          <li>Kuntonyrkkeily</li>
          <li>Rentoutumispaja</li>
          <li>Seinäkiipeily</li>
          <li>Toiminnallinen treeni</li>
        </ul>
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <Hero />
      <Lamp upperText={`Health and happiness.`} lowerText={`The right way.`} />

      <div className="mx-auto">
        <ProfileStripe />
      </div>
      <Section
        id="yksilovalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <ExpandableCardCollection cards={cards2} />
      </Section>

      <Section
        id="ryhmavalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <div>
          <div className="text-center relative z-10">
            <h2 className="text-2xl font-extrabold mb-6 text-primary">
              ALKAVAT RYHMÄVALMENNUKSET
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 border border-secondary-dark rounded-lg shadow-lg bg-light bg-opacity-80 hover:bg-opacity-100 transition duration-300">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-primary text-3xl mr-3" />
                  <h3 className="text-2xl font-bold text-dark">
                    Nuorten lihasvoimatreenin alkeet 8 viikkoa xx€
                  </h3>
                </div>
                <p className="mb-4 text-lg text-typography">
                  Kurssilla ohjataan nuorta treenaamaan turvallisesti,
                  kehitetään motoriikkaa ja lihashallintaa sekä tutustutaan
                  kuntosaliharjoittelun perusliikkeisiin
                </p>
                <ul className="list-disc list-inside mb-4 text-lg text-typography">
                  <li>Ohjatut treenit kahdesti viikossa</li>
                </ul>
              </div>
              <div className="p-6 border border-secondary-dark rounded-lg shadow-lg bg-light bg-opacity-80 hover:bg-opacity-100 transition duration-300">
                <div className="flex items-center mb-4">
                  <FaRunning className="text-primary text-3xl mr-3" />
                  <h3 className="text-2xl font-bold text-dark">
                    Jaksamista arkeen 12 viikkoa xx€
                  </h3>
                </div>
                <p className="mb-4 text-lg text-typography">
                  Kurssi on suunnattu henkilöille, jotka kokevat haastetta
                  rakentaa arkeensa jaksamista tukevia rutiineja.
                </p>
                <p className="text-lg text-typography">
                  Kurssilla annetaan viikoittaiset liikuntatavoitteet,
                  ravitsemustavoitteet sekä palautumistavoitteet. Annettujen
                  tavoitteiden täyttämiseksi rakennetaan työkaluja ja pyritään
                  opastamaan osallistujaa löytämään mielekkäitä tapoja rakentaa
                  itsellensä tasapainoinen arki
                </p>
              </div>
              <div className="p-6 border border-secondary-dark rounded-lg shadow-lg bg-light bg-opacity-80 hover:bg-opacity-100 transition duration-300">
                <div className="flex items-center mb-4">
                  <FaBriefcase className="text-primary text-3xl mr-3" />
                  <h3 className="text-2xl font-bold text-dark">
                    YRITYSPALVELUT
                  </h3>
                </div>
                <p className="mb-4 text-lg text-typography">
                  Toteutamme yrityksille tyky-päiviä sekä työkykyä tukevia
                  hyvinvointikampanjoita. Palvelu koostetaan tilaajan
                  henkilöstömäärän ja tarpeen mukaan. Pyydä tarjous
                  yhteydenottolomakkeella.
                </p>
                <p className="text-lg font-bold text-dark">
                  Suosittuja tyky-päiväohjelmia:
                </p>
                <ul className="list-disc list-inside mb-4 text-lg text-typography">
                  <li>Kuntonyrkkeily</li>
                  <li>Rentoutumispaja</li>
                  <li>Seinäkiipeily</li>
                  <li>Toiminnallinen treeni</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="ryhmavalmennukset"
        bgColor="bg-gradient-to-r from-gray-200 via-white to-gray-200"
        textColor="text-dark"
      >
        <div>
          <div className="text-center relative z-10">
            <h2 className="text-2xl font-extrabold mb-6 text-primary">
              ALKAVAT RYHMÄVALMENNUKSET
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-6 border border-secondary-dark rounded-lg shadow-lg bg-light bg-opacity-80 hover:bg-opacity-100 transition duration-300"
                >
                  <div className="flex items-center mb-4">
                    {card.icon}
                    <h3 className="text-2xl font-bold text-dark">
                      {card.title} {card.duration}
                    </h3>
                  </div>
                  <Modal>
                    <ModalTrigger className="mt-4 text-typography underline">
                      Avaa
                    </ModalTrigger>
                    <ModalBody>
                      <ModalContent>
                        <h3 className="text-2xl font-bold mb-4 text-dark">
                          {card.title} {card.duration}
                        </h3>
                        {card.description}
                      </ModalContent>
                      <ModalFooter>
                        <button
                          className="px-4 py-2 bg-primary text-white rounded-md"
                          onClick={() => alert("Pyydä tarjous")}
                        >
                          Pyydä tarjous
                        </button>
                      </ModalFooter>
                    </ModalBody>
                  </Modal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
