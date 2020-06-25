import React from 'react';
import PropTypes from 'prop-types';

function Doctor({ name, adress, speciality }) {
  return (
    <div className="Doctor">
      <h3>{name}</h3>
      <p>{adress}</p>
      <p>{speciality}</p>
    </div>
  );
}

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired
};

export default Doctor;
