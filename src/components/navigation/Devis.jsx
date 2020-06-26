import React from 'react';

function Devis() {
  return (
    <div className="Devis">
      <h1>Obtenir un devis</h1>
      <div className="DevisInfos">
        <img className="DevisImg" src="./img/img1.jpg" alt="chiro" />
        <div className="DevisText">
          <p>
            Coût moyen d’une consultation : Entre 80 € et 150 €. Généralement, seule la première
            consultation est payante.
          </p>
          <ul style={{ listStyle: 'none' }}>
            <li>
              Si la consultation préalable concerne une intervention prise en charge par la Sécurité
              sociale, cette consultation préalable est prise en charge par l’assurance maladie, le
              dépassement d’honoraires peut être remboursé au moins en partie par les mutuelles.
            </li>
            <br />
            <li>
              Si la consultation préalable concerne une intervention non prise en charge par la
              Sécurité sociale, tous les frais sont à la charge du patient y compris la consultation
              préalable.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Devis;
