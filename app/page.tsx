"use client";
import Hero from "@components/ui/hero";
import ProfileStripe from "./components/profile-stripe";

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
  FaBiking,
  FaBriefcase,
  FaDumbbell,
  FaRunning,
  FaStream,
  FaUsers,
} from "react-icons/fa";
import { ExpandableCardCollection } from "./components/expandable-cards";

const cards2 = [
  {
    description: "Henkilökohtainen treeniohjelma 8 viikkoa xx€",
    title: "Henkilökohtainen treeniohjelma",
    src: <FaDumbbell className="text-primary text-6xl mt-4 mb-4" />,
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
    description: "Ohjattu treeni xx€/h",
    title: "Ohjattu treeni",
    src: <FaRunning className="text-primary text-6xl mt-4 mb-4" />,
    ctaLink: "#",
    content: () => <p>Hintaan lisätään valitun salin käyntimaksut.</p>,
  },
  {
    description: "Henkilökohtainen ravinto-ohjelma 12 viikkoa xx€",
    title: "Henkilökohtainen ravinto-ohjelma",
    src: <FaAppleAlt className="text-primary text-6xl mt-4 mb-4" />,
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
    title: "Joogan perusteet",
    duration: "6 viikkoa xx€",
    icon: <FaStream className="text-primary text-3xl mr-3" />,
    description: (
      <>
        <p className="mb-4 text-lg text-typography">
          Tämä kurssi johdattaa osallistujat joogan maailmaan, keskittyen
          perusliikkeisiin ja hengitystekniikoihin.
        </p>
        <ul className="list-disc list-inside mb-4 text-lg text-typography">
          <li>Ohjatut joogatunnit kerran viikossa</li>
          <li>Hengitysharjoituksia ja meditaatiota</li>
        </ul>
      </>
    ),
  },
  {
    title: "Kestävyyskunnon kohotus",
    duration: "10 viikkoa xx€",
    icon: <FaBiking className="text-primary text-3xl mr-3" />,
    description: (
      <>
        <p className="mb-4 text-lg text-typography">
          Kurssi keskittyy kestävyyskunnon parantamiseen erilaisten aerobisten
          harjoitusten avulla, sopii kaiken tasoisille liikkujille.
        </p>
        <ul className="list-disc list-inside mb-4 text-lg text-typography">
          <li>Viikoittaiset juoksu- ja pyöräilytreenit</li>
          <li>Kuntotason seuranta ja henkilökohtaiset tavoitteet</li>
        </ul>
      </>
    ),
  },
];

export default function Page() {
  return (
    <>
      <Hero />
      <section id="lamp">
        <Lamp
          upperText={`Health and happiness.`}
          lowerText={`The right way.`}
        />
      </section>
      <div className="bg-gradient-to-r from-gray-200 via-gray-50 to-gray-200">
        <div className="mx-auto mb-4">
          <ProfileStripe />
        </div>

        <div className="py-8 px-4">
          <ExpandableCardCollection cards={cards2} />
        </div>
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="p-6 mr-4 ml-4 border border-secondary-dark rounded-lg shadow-lg bg-light bg-opacity-80 hover:bg-opacity-100 transition duration-300">
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-primary text-3xl mr-3" />
                <h3 className="text-2xl md:text-4xl font-bold text-secondary-dark">
                  YRITYKSILLE
                </h3>
              </div>
              <p className="mb-4 text-lg text-dark">
                Toteutamme yrityksille tyky-päiviä sekä työkykyä tukevia
                hyvinvointikampanjoita. Palvelu koostetaan tilaajan
                henkilöstömäärän ja tarpeen mukaan. Pyydä tarjous
                yhteydenottolomakkeella.
              </p>
              <p className="text-lg font-bold text-secondary-dark">
                Suosittuja tyky-päiväohjelmia:
              </p>
              <ul className="list-disc list-inside mb-4 text-lg text-dark">
                <li>Kuntonyrkkeily</li>
                <li>Rentoutumispaja</li>
                <li>Seinäkiipeily</li>
                <li>Toiminnallinen treeni</li>
              </ul>
            </div>
          </div>
          <div className="p-6 mr-4 ml-4 border border-secondary-dark rounded-lg shadow-lg bg-light bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl md:text-4xl font-bold text-secondary-dark">
                YKSITYISILLE
              </h3>
            </div>
            <p className="mb-4 text-lg text-dark">
              Toteutamme yrityksille tyky-päiviä sekä työkykyä tukevia
              hyvinvointikampanjoita. Palvelu koostetaan tilaajan
              henkilöstömäärän ja tarpeen mukaan. Pyydä tarjous
              yhteydenottolomakkeella.
            </p>
            <p className="text-lg font-bold text-secondary-dark">
              Suosittuja tyky-päiväohjelmia:
            </p>
            <ul className="list-disc list-inside mb-4 text-lg text-dark">
              <li>Kuntonyrkkeily</li>
              <li>Rentoutumispaja</li>
              <li>Seinäkiipeily</li>
              <li>Toiminnallinen treeni</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="text-center relative z-10 py-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-secondary-dark p-4 rounded-lg shadow-md">
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
                    <h3 className="text-2xl font-bold text-secondary-dark">
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
                        <ModalTrigger className="mr-6 px-4 py-2 bg-buttons text-white rounded-md">
                          Sulje
                        </ModalTrigger>
                        <button
                          className="ml-6 px-4 py-2 bg-buttons text-white rounded-md"
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
      </div>
    </>
  );
}
