import React, { Component } from 'react';
import Pharmacie from './Pharmacie';

const pharmacy = [
  {
    name: 'Pharmacie Lafayette Tolosane',
    adress: '20 Avenue Tolosane',
    distance: '500m'
  },
  {
    name: 'Pharmacie des Facs',
    adress: '84 route de Narbonne',
    distance: '800m'
  },
  {
    name: 'Pharmacie des Cotaux',
    adress: '2 rue des palmiers',
    distance: '1.2km'
  },
  {
    name: 'Pharmacie du Férétra',
    adress: '2 impasse du Feretra',
    distance: '2km'
  }
];

class PharmacyList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {pharmacy.map(pharmacie => (
          <Pharmacie data={pharmacie} />
        ))}
      </div>
    );
  }
}

export default PharmacyList;
