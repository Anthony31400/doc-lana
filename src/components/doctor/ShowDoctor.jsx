import React from 'react';
import Doctor from './Doctor';
import './doctor.css';

const medecin = [
  {
    id: 1,
    name: 'Dr Sylvie Bien',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    speciality: 'Médecin généraliste',
    adress: '36 rue des bons vivants 31100 Toulouse'
  },
  {
    id: 2,
    name: 'Dr Didier Raoult',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    speciality: "Disciple de l'hydroxyChloroquine",
    adress: '27 rue de la haute 13100 Marseille'
  },
  {
    id: 3,
    name: 'Dr Claire Voyance',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    speciality: 'Psychiatre',
    adress: '36 rue du soleil radieux 31100 Toulouse'
  },
  {
    id: 4,
    name: 'Dr Doc Gyneco',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    speciality: 'Gynecologue',
    adress: '1 Enceinte du bébé Hurlant 31100 Toulouse'
  }
];

function ShowDoctor() {
  const allDoctor = (
    <ul>
      {medecin.map(doc => (
        <li key={doc.id} className="doclist">
          <Doctor {...doc} />
        </li>
      ))}
    </ul>
  );
  return <div>{allDoctor}</div>;
}

ShowDoctor.propTypes = {};

export default ShowDoctor;
