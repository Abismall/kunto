import React from "react";
import { FaUsers, FaRunning, FaBriefcase } from "react-icons/fa";
import {
  Modal,
  ModalTrigger,
  ModalBody,
  ModalContent,
  ModalFooter,
} from "./modal"; // Adjust the import path as needed

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

const ServiceDisplayModals: React.FC = () => {
  return (
    <div>
      <div className="text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-primary">
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
  );
};

export default ServiceDisplayModals;
