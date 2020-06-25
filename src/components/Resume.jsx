import React from 'react';
import PropTypes from 'prop-types';

const tendances = [
  {
    id: 1,
    nom: 'Dr Didier Raoult',
    valeur: 'Dr Didier Raoult',
    tendance: 'Dr Didier Raoult'
  },
  {
    id: 2,
    nom: 'Dr Didier Raoult',
    valeur: 'Dr Didier Raoult',
    tendance: 'Dr Didier Raoult'
  },
  {
    id: 3,
    nom: 'Dr Didier Raoult',
    valeur: 'Dr Didier Raoult',
    tendance: 'Dr Didier Raoult'
  }
];

function Resume() {
  const allResume = (
    <ul>
      {tendances.map(tends => (
        <li key={tends.id} className="resumeList">
          <section className="Resume">
            <div>
              <h4>{tends.nom}</h4>
              <p>{tends.valeur}</p>
              <p>{tends.tendance}</p>
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
