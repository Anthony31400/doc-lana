import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Prescription.css';

class PrescriptionDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { disease, date, treatmentDuration } = this.props;
    return (
      <div className="prescription-small-view">
        <h5>{disease}</h5>
        <p>{date}</p>
        <p>{treatmentDuration}</p>
      </div>
    );
  }
}

PrescriptionDisplay.propTypes = {
  disease: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  treatmentDuration: PropTypes.string.isRequired
};

export default PrescriptionDisplay;
