import React from 'react';
import './globalContainer.css';
import Resume from './Resume';
import TopCountry from './TopCountry';

function Main() {
  return (
    <div className="main grid main-cards">
      <div className="actual card" />
      <div className="courbe card" />
      <div className="news card" />
      <div className="topcountry card">
        <TopCountry />
      </div>
      <div className="tendance card">
        <Resume />
      </div>
    </div>
  );
}

export default Main;
