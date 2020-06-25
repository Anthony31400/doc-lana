import React from 'react';
import './globalContainer.css';
import Resume from './Resume';
import Courbe from './Courbe';

function Main() {
  return (
    <div className="main grid main-cards">
      <div className="actual card" />
      <div className="courbe card">
        <div className="overviewcard">
          <p>Tendance d'évolution des tarifs moyen des opérations en Europe</p>
        </div>
        <Courbe />
      </div>
      <div className="news card" />
      <div className="topcountry card">
        <div className="overviewcard" />
      </div>
      <div className="tendance card">
        <Resume />
      </div>
    </div>
  );
}

export default Main;
