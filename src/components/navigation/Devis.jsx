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
      <div className="Rhino">
        <h3>Rhinoplasties</h3>
        <div className="RhinoInfos">
          <img src="./img/face.png" alt="face" className="DevisFace" />
          <div className="RhinoText">
            <p>Le coût varie en fonction de la complexité de l'intervention :</p>
            <ul>
              <li>Rhinoplastie primaire non prise en charge par la Sécurité sociale : 7 950</li>
              <li>
                Rhinoplastie secondaire non prise en charge par la Sécurité sociale : 8 950 € à 10
                950 €
              </li>
              <li>
                Rhinoplastie primaire avec prise en charge par la Sécurité sociale : 7 750 € à 8 950
                €
              </li>
              <li>
                Rhinoplastie secondaire avec prise en charge par la Sécurité sociale : 8 950 € à 10
                950 €
              </li>
              <li>Profiloplastie : 7 500 € à 10 500 €</li>
              <li>Rhinoplastie médicale : 500 € à 600 €</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Body">
        <h3>Silhouette</h3>
        <div className="BodyInfo">
          <img src="./img/body.png" alt="Body" className="BodyImg" />
          <div className="BodyText">
            <ul>
              <li>Liposuccion : 1 500 € à 4 500 €</li>
              <li>Abdominoplastie : 3 500 € à 4 500 €</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Devis;
