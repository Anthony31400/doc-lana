import React from 'react';
import './globalContainer.css';
import Resume from './Resume';
import Courbe from './Courbe';
import NewsCard from './NewsCard';
import TopCountry from './TopCountry';

function Main() {
  return (
    <div className="main grid main-cards">
      <div className="tendance card">
        <Resume />
      </div>
      <div className="courbe card">
        <div className="overviewcard">
          <p>Tendance d'évolution des tarifs moyen des opérations en Europe</p>
        </div>
        <Courbe />
      </div>
      <div className="news card">
        <NewsCard />
      </div>
      <div className="topcountry card">
        <TopCountry />
      </div>
      <div className="tendance card" />
    </div>
  );
}

export default Main;
