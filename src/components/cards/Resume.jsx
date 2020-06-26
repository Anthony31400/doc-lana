import React from 'react';
import './cards.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import Devis from '../navigation/Devis';

const tendances = [
  {
    id: 1,
    nom: 'Botox',
    valeur: '69,122',
    tendance: '56%'
  },
  {
    id: 2,
    nom: 'Rhinoplastie',
    valeur: '14,056',
    tendance: '56%'
  },
  {
    id: 3,
    nom: 'Lifting',
    valeur: '38,243',
    tendance: '56%'
  }
];

function Resume() {
  const allResume = (
    <ul>
      {tendances.map(tends => (
        <li key={tends.id} className="resumeList">
          <div className="ResumeInfo">
            <p className="nom">{tends.nom}</p>
            <p className="infoValue">{tends.valeur}</p>
            <p className="infoTrend">{tends.tendance}</p>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <div className="Resume">
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
