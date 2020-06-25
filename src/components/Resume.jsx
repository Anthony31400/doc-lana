import React from 'react';
import PropTypes from 'prop-types';
import './globalContainer.css';

const tendances = [
  {
    id: 1,
    nom: 'Dr Didier Raoult',
    valeur: '14,056',
    tendance: '56%'
  },
  {
    id: 2,
    nom: 'Dr Didier Raoult',
    valeur: '14,056',
    tendance: '56%'
  },
  {
    id: 3,
    nom: 'Dr Didier Raoult',
    valeur: '14,056',
    tendance: '56%'
  }
];

function Resume() {
  const allResume = (
    <ul>
      {tendances.map(tends => (
        <li key={tends.id} className="resumeList">
          <section className="Resume">
            <div className="ResumeInfos">
              <h4 className="nom">{tends.nom}</h4>
              <div className="infos">
                <span>{tends.valeur}</span>
                <span>{tends.tendance}</span>
              </div>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
  return <div>{allResume}</div>;
}

Resume.propTypes = {
  nom: PropTypes.string.isRequired,
  valeur: PropTypes.string.isRequired,
  tendance: PropTypes.string.isRequired
};

export default Resume;
