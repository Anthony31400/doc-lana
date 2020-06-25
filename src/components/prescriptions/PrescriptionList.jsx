import React, { Component } from 'react';
import PrescriptionDisplay from './PrescriptionDisplay';

class PrescriptionList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="prescription-list">
        <h2>Mes ordonnances</h2>
        <PrescriptionDisplay />
      </div>
    );
  }
}

export default PrescriptionList;
