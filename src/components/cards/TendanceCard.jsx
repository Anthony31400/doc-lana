import React, { Component } from 'react';
import './cards.css';

class TendanceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="tendance">
        <div className="chirurgien">
          <h3 className="title-chir">Trouver votre chirurgien</h3>
        </div>
        <select name="specialites" className="spec-select">
          <option value="">--Choisir une spécialité--</option>
          <option value="lipo">Liposuccion</option>
          <option value="abdo">Abdominoplastie</option>
          <option value="seins">Chirurgie des seins</option>
          <option value="visage">Chirurgie du visage</option>
        </select>
        <div></div>
        <select name="pays" className="pays-select">
          <option value="">--Choisir un pays--</option>
          <option value="france">France</option>
          <option value="israel">Israël</option>
          <option value="turquie">Turquie</option>
          <option value="mexique">Mexique</option>
          <option value="maroc">Maroc</option>
          <option value="roumanie">Roumanie</option>
          <option value="pays-bas">Pays-Bas</option>
        </select>
        <div></div>
        <button className="search" type="button">
          Chercher
        </button>
        <hr></hr>
        <div className="voyage">
          <h3 className="title-voy">Reserver votre séjour</h3>
          <p>Vous avez trouvé votre opération ?</p>
          <a
            href="https://www.liligo.fr/?utm_source=google&utm_medium=cpc&utm_campaign=G-L-FR-BD-Brand-SEA-PC-L&utm_term=liligo&k_clickid=_k_CjwKCAjwltH3BRB6EiwAhj0IUN6K69SbR3Nnsbo3ZIZ74_0otbNvzmtoQkbIVfBX7wSn8NVe8H0rBBoCDgkQAvD_BwE_k_&gclid=CjwKCAjwltH3BRB6EiwAhj0IUN6K69SbR3Nnsbo3ZIZ74_0otbNvzmtoQkbIVfBX7wSn8NVe8H0rBBoCDgkQAvD_BwE"
            target="blank"
          >
            Cliquez ici
          </a>
        </div>
      </div>
    );
  }
}

export default TendanceCard;
