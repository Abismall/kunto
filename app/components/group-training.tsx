import React from "react";
import { FaUsers, FaRunning, FaBriefcase } from "react-icons/fa";

const GroupTraining: React.FC = () => {
  return (
    <div>
      <div className="text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-primary">
          ALKAVAT RYHMÄVALMENNUKSET
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 border border-secondary rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaUsers className="text-secondary-dark text-3xl mr-3" />
              <h3 className="text-2xl font-bold">
                Nuorten lihasvoimatreenin alkeet 8 viikkoa xx€
              </h3>
            </div>
            <p className="mb-4 text-lg">
              Kurssilla ohjataan nuorta treenaamaan turvallisesti, kehitetään
              motoriikkaa ja lihashallintaa sekä tutustutaan
              kuntosaliharjoittelun perusliikkeisiin
            </p>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>Ohjatut treenit kahdesti viikossa</li>
            </ul>
          </div>
          <div className="p-6 border border-secondary rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaRunning className="text-secondary-dark text-3xl mr-3" />
              <h3 className="text-2xl font-bold">
                Jaksamista arkeen 12 viikkoa xx€
              </h3>
            </div>
            <p className="mb-4 text-lg">
              Kurssi on suunnattu henkilöille, jotka kokevat haastetta rakentaa
              arkeensa jaksamista tukevia rutiineja.
            </p>
            <p className="text-lg">
              Kurssilla annetaan viikoittaiset liikuntatavoitteet,
              ravitsemustavoitteet sekä palautumistavoitteet. Annettujen
              tavoitteiden täyttämiseksi rakennetaan työkaluja ja pyritään
              opastamaan osallistujaa löytämään mielekkäitä tapoja rakentaa
              itsellensä tasapainoinen arki
            </p>
          </div>
          <div className="p-6 border border-secondary rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-secondary-dark text-3xl mr-3" />
              <h3 className="text-2xl font-bold">YRITYSPALVELUT</h3>
            </div>
            <p className="mb-4 text-lg">
              Toteutamme yrityksille tyky-päiviä sekä työkykyä tukevia
              hyvinvointikampanjoita. Palvelu koostetaan tilaajan
              henkilöstömäärän ja tarpeen mukaan. Pyydä tarjous
              yhteydenottolomakkeella.
            </p>
            <p className="text-lg font-bold">Suosittuja tyky-päiväohjelmia:</p>
            <ul className="list-disc list-inside mb-4 text-lg">
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

export default GroupTraining;
