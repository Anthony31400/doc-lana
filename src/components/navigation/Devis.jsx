import React from 'react';

function Devis() {
  return (
    <div>
      <h1>Obtenir un devis</h1>
      <div className="DevisInfos">
        <img className="DevisImg" src="./img/img1.jpg" alt="chiro" />
        <span className="DevisText">
          Coût d’une consultation : Entre 80 € et 150 €. Seule la première consultation est payante.
          <p>
            Si la consultation préalable concerne une intervention prise en charge par la Sécurité
            sociale, cette consultation préalable est prise en charge par l’assurance maladie
          </p>
          le dépassement d’honoraires peut être remboursé au moins en partie par les mutuelles. Si
          la consultation préalable concerne une intervention non prise en charge par la Sécurité
          sociale, tous les frais sont à la charge du patient y compris la consultation préalable.
        </span>
      </div>
    </div>
  );
}

export default Devis;
