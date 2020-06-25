import React from 'react';
import Doctor from './Doctor';

const medecin = [
  {
    id: 1,
    name: 'Dr Sylvie Bien',
    speciality: 'Médecin généraliste',
    adress: '36 rue des bons vivants 31100 Toulouse'
  },
  {
    id: 2,
    name: 'Dr Didier Raoult',
    speciality: "Disciple de l'hydroxyChloroquine",
    adress: '27 rue de la haute 13100 Marseille'
  },
  {
    id: 3,
    name: 'Dr Claire Voyance',
    speciality: 'Psychiatre',
    adress: '36 rue du soleil radieux 31100 Toulouse'
  },
  {
    id: 4,
    name: 'Dr Doc Gyneco',
    speciality: 'Gynecologue',
    adress: '1 Enceinte du bébé Hurlant 31100 Toulouse'
  }
];

function ShowDoctor() {
  const allDoctor = (
    <ul>
      {medecin.map(doc => (
        <li key={doc.id}>
          <Doctor {...doc} />
        </li>
      ))}
    </ul>
  );
  return <div>{allDoctor}</div>;
}

ShowDoctor.propTypes = {};

export default ShowDoctor;
