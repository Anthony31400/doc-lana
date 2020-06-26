import React from 'react';

function Devis() {
  return (
    <div className="Devis">
      <h1 className="DevisTitle">Obtenir un devis</h1>
      <div className="DevisInfos">
        <img className="DevisImg" src="./img/img1.jpg" alt="chiro" />
        <div className="DevisText">
          <h4>Coût moyen d’une consultation : </h4>
          <p>Entre 80 € et 150 €. Généralement, seule la première consultation est payante.</p>
          <ul>
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
          <h4>Coût des interventions et sécurité sociale :</h4>
          <p>
            Il existe trois cas de figure s’agissant des frais liés à une opération chirurgicale.
          </p>

          <ul>
            <li>
              L’intervention est prise en charge par la Sécurité sociale. Il s’agit par exemple de
              rhinoplasties consécutives à un traumatisme ou à des problèmes respiratoires, ou
              encore les oreilles très décollées, des réductions mammaires importantes, etc. Dans ce
              cas, les frais d’intervention sont pris en charge par l’assurance maladie. Les
              dépassements d’honoraires du chirurgien et de l’anesthésiste peuvent être remboursés
              au moins en partie par les mutuelles ; Un arrêt de travail peut être prescrit si
              nécessaire.
            </li>
            <li>
              L’intervention n’est pas prise en charge par la Sécurité sociale. Dans ce cas, tous
              les frais sont à la charge du patient : les honoraires du chirurgien, de
              l’anesthésiste, les frais d’hospitalisation et de bloc opératoire, la TVA et le coût
              éventuel du matériel. Aucun arrêt de travail ne peut être prescrit par le médecin.
            </li>
            <li>
              Les cas mixtes dont une partie seulement est prise en charge par la Sécurité sociale.
              Il s’agit par exemple de certaines rhinoplasties associées à un problème fonctionnel
              par exemple. Dans ce cas, une partie des frais associés à l’intervention peut être
              prise en charge par l’assurance maladie et remboursée par les mutuelles, l’autre
              partie est à la charge du patient.
            </li>
          </ul>
          <a
            href="#
          Devis"
            className="LinkDevis"
          >
            Faire une estimation
          </a>
        </div>
      </div>
      <div className="Rhino">
        <h3>Rhinoplasties</h3>
        <div className="RhinoInfos">
          <img src="./img/face.png" alt="face" className="DevisFace" title="Obtenir un devis" />
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
          <img src="./img/body.png" alt="Body" className="BodyImg" title="Obtenir un devis" />
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
