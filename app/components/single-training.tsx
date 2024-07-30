import React from "react";
import { FaDumbbell, FaHeartbeat, FaAppleAlt, FaRunning } from "react-icons/fa";

const SingleTraining: React.FC = () => {
  return (
    <div>
      <div className="text-center relative z-10">
        <h2 className="text-5xl font-extrabold mb-6 text-primary">
          YKSILÖVALMENNUKSET
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 border border-secondary rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaDumbbell className="text-secondary-dark text-3xl mr-3" />
              <h3 className="text-2xl font-bold">
                Henkilökohtainen treeniohjelma 8 viikkoa xx€
              </h3>
            </div>
            <ul className="list-disc list-inside mb-4 text-lg">
              <li>
                Sisältää kaksi ohjattua treeniä missä liikkeet käydään lävitse
                (Hintaan lisätään valitun salin käyntimaksut)
              </li>
              <li>Ohjelmaa muokataan etenemisen mukaan</li>
            </ul>
          </div>
          <div className="p-6 border border-secondary rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaHeartbeat className="text-secondary-dark text-3xl mr-3" />
              <h3 className="text-2xl font-bold">
                Henkilökohtainen elämäntapavalmennus 1kk xx€
              </h3>
            </div>
            <p className="mb-4 text-lg">
              Ohjattavalle luodaan elämäntilanteeseen sopivat tavoitteet
              liikunnan, ravitsemuksen ja palautumisen suhteen.
            </p>
            <p className="text-lg">
              Valmennuksen tavoitteena on luoda arkeen hyvinvointia tukevia
              rutiineja lähtötason mukaisesti
            </p>
          </div>
          <div className="p-6 border border-secondary rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaRunning className="text-secondary-dark text-3xl mr-3" />
              <h3 className="text-2xl font-bold">Ohjattu treeni xx€/h</h3>
            </div>
            <p className="text-lg">
              Hintaan lisätään valitun salin käyntimaksut
            </p>
          </div>
          <div className="p-6 border border-secondary rounded-lg shadow-lg bg-white bg-opacity-80 hover:bg-opacity-100 transition duration-300">
            <div className="flex items-center mb-4">
              <FaAppleAlt className="text-secondary-dark text-3xl mr-3" />
              <h3 className="text-2xl font-bold">
                Henkilökohtainen ravinto-ohjelma 12 viikkoa xx€
              </h3>
            </div>
            <p className="text-lg">
              Sisältää kahden viikon välein ohjelman muokkaamisen tarvittaessa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTraining;
