import React from "react";
import badgeImage from "./assets/badge.png";

const classement = [
  {
    participant: "Damien Da Silva Bregieiro",
    dateDepart: 1643724000,
    dateArrivee: 1643725713,
  },
  {
    participant: "Thomas Ponthoreau",
    dateDepart: 1643724000,
    dateArrivee: 1643725429,
  },
  {
    participant: "Guillem Dardill",
    dateDepart: 1643724000,
    dateArrivee: 1643726269,
  },
  {
    participant: "Amadou NDIAYE",
    dateDepart: 1643724000,
    dateArrivee: 1643724564,
  },
  {
    participant: "Pierre Bague",
    dateDepart: 1643732114,
    dateArrivee: 1643733782,
  },
  {
    participant: "Hugo Prea",
    dateDepart: 1643724000,
    dateArrivee: 1643730981,
  },
  {
    participant: "Jean-Luc Roux",
    dateDepart: 1643724000,
    dateArrivee: 1643726134,
  },
  {
    participant: "Tony Bernard",
    dateDepart: 1643724000,
    dateArrivee: 1643725967,
  },
  {
    participant: "Serge Munnia-Vincent",
    dateDepart: 1643724000,
    dateArrivee: 1643867841,
  },
  {
    participant: "Camille Constant",
    dateDepart: 1643724000,
    dateArrivee: 1643725429,
  },
];

function Classement() {
  // Consigne 1 : Trier le classement par temps avec la méthode sort()
  const classementTri = classement.sort(
    (concurrent1, concurrent2) =>
      concurrent1.dateArrivee -
      concurrent1.dateDepart -
      (concurrent2.dateArrivee - concurrent2.dateDepart)
  );

  // Consigne 2 : Ajuster le classement en cas d'égalité de temps
  classementTri.forEach((concurrent, index) => {
    if (
      index > 0 &&
      concurrent.dateArrivee - concurrent.dateDepart ===
        classementTri[index - 1].dateArrivee -
          classementTri[index - 1].dateDepart
    ) {
      concurrent.classement = classementTri[index - 1].classement;
    } else {
      concurrent.classement = index + 1;
    }
  });

  function formatTemps(temps) {
    const date = new Date(temps * 1000);
    const heures = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const secondes = date.getUTCSeconds().toString().padStart(2, "0");

    return `${heures}:${minutes}:${secondes}`;
  }

  return (
    <div>
      <h1>
        <img src={badgeImage} alt="Badge gauche" className="icon" />
        Classement des athlètes
        <img src={badgeImage} alt="Badge droite" className="icon" />
      </h1>
      <ol>
        {classementTri.map((concurrent, index) => (
          <li key={index}>
            <p>
              Classement: {concurrent.classement} <br /> Nom du concurrent :{" "}
              {concurrent.participant}
            </p>{" "}
            Chrono réalisé :{" "}
            {formatTemps(concurrent.dateArrivee - concurrent.dateDepart)}{" "}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Classement;
