import React from 'react';
import PropTypes from 'prop-types';
import './globalContainer.css';

const tendances = [
  {
    id: 1,
    nom: 'Rhinoplastie',
    valeur: '14,056',
    tendance: '56%'
  },
  {
    id: 2,
    nom: 'Lifting',
    valeur: '14,056',
    tendance: '56%'
  },
  {
    id: 3,
    nom: 'Botox',
    valeur: '14,056',
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
  return <div className="Resume">{allResume}</div>;
}

Resume.propTypes = {
  nom: PropTypes.string.isRequired,
  valeur: PropTypes.string.isRequired,
  tendance: PropTypes.string.isRequired
};

export default Resume;
