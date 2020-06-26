import React from 'react';
import './cards.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Devis from '../navigation/Devis';

const tendances = [
  {
    id: 1,
    nom: 'Botox',
    valeur: '8900 €',
    tendance: +7
  },
  {
    id: 2,
    nom: 'Rhinoplastie',
    valeur: '4200 €',
    tendance: -3
  },
  {
    id: 3,
    nom: 'Lifting',
    valeur: '6100 €',
    tendance: +5
  }
];

function Resume() {
  const allResume = (
    <div className="test-resume">
      {tendances.map(tends => (
        <div className="ResumeInfo">
          <p className="nom">{tends.nom}</p>
          <p className="infoValue">{tends.valeur}</p>
          <p className={tends.tendance > 0 ? 'infoTrendPos' : 'infoTrend'}>{tends.tendance} %</p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="Resume">
      <div className="country">
        <p className="country-operation">Opération</p>
        <p className="country-price">Prix moyen</p>
        <p className="country-lastVariation">Tendance</p>
      </div>
      <hr />
      {allResume}
      <NavLink to="/devis" className="DevisButton">
        Obtenir un devis
      </NavLink>
      <Router>
        <Switch>
          <Route exact path="/devis" component={Devis} />
        </Switch>
      </Router>
    </div>
  );
}

Resume.propTypes = {};

export default Resume;
