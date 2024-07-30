import React from "react";
import { FaUsers, FaRunning, FaBriefcase } from "react-icons/fa";

const ServiceDisplayBasic: React.FC = () => {
  return (
    <div>
      <div className="text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-primary">
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
              Kurssilla ohjataan nuorta treenaamaan turvallisesti, kehitetään
              motoriikkaa ja lihashallintaa sekä tutustutaan
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
          </div>
          <div className="p-6 border border-secondary-dark rounded-lg shadow-lg bg-light bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-primary text-3xl mr-3" />
              <h3 className="text-2xl font-bold text-dark">YRITYSPALVELUT</h3>
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
  );
};

export default ServiceDisplayBasic;
