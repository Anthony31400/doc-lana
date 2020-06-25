import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './doctor.css';

function Doctor({ avatar, name, adress, speciality }) {
  return (
    <div className="Doctor">
      <img src={avatar} alt="Doc" className="avatar" />
      <div className="displayinfos">
        <div className="name-status">
          <h3 className="name">{name}</h3>
          <div className="status">
            <div className="status-online" />
            <p className="status-text">Actif</p>
          </div>
        </div>
        <p>{adress}</p>
        <p>{speciality}</p>
        <NavLink to="/mesrdv">
          <li>Voir mes rdv</li>
        </NavLink>
      </div>
    </div>
  );
}

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  adress: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired
};

export default Doctor;
