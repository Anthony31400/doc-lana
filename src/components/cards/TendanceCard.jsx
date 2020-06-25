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
          <p>Trouver votre chirurgien</p>
        </div>
        <select name="specialites" id="spec-select">
          <option value="">--Choisir une spécialité--</option>
          <option value="lipo">Liposuccion</option>
          <option value="abdo">Abdominoplastie</option>
          <option value="seins">Chirurgie des seins</option>
          <option value="visage">Chirurgie du visage</option>
        </select>
        <select name="pays" id="pays-select">
          <option value="">--Choisir un pays--</option>
          <option value="france">France</option>
          <option value="israel">Israël</option>
          <option value="turquie">Turquie</option>
          <option value="mexique">Mexique</option>
          <option value="maroc">Maroc</option>
          <option value="roumanie">Roumanie</option>
          <option value="pays-bas">Pays-Bas</option>
        </select>
      </div>
    );
  }
}

export default TendanceCard;
