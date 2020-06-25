import React from 'react';
import './cards.css';

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
      <h3>Les opérations en vogue</h3>
      {allResume}
    </div>
  );
}

Resume.propTypes = {};

export default Resume;
