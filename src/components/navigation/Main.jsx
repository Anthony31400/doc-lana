import React from 'react';
import './globalContainer.css';
import Resume from '../cards/Resume';
import Courbe from '../cards/Courbe';
import NewsCard from '../cards/NewsCard';
import TopCountry from '../cards/TopCountry';
import TendanceCard from '../cards/TendanceCard';

function Main() {
  return (
    <div className="main grid main-cards">
      <div className="tendance card">
        <Resume />
      </div>
      <div className="courbe card">
        <div className="overviewcard">
          <p>Tendance dévolution des tarifs moyen des opérations en Europe</p>
        </div>
        <Courbe />
      </div>
      <div className="news card">
        <div className="overviewcard">
          <p>News</p>
        </div>
        <NewsCard />
      </div>
      <div className="topcountry card">
        <TopCountry />
      </div>
      <div className="tendance card">
        <TendanceCard />
      </div>
    </div>
  );
}

export default Main;
