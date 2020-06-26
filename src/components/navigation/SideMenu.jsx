import React from 'react';
import { NavLink } from 'react-router-dom';
import './globalContainer.css';
import FAQ from './FAQ.jsx';

export default function SideMenu() {
  return (
    <section>
      <div className="logo">
        <img src="./img/logowhale.svg" alt="whale" style={{ width: '70px', marginTop: '20%' }} />
      </div>
      <ul className="aside_list">
        <NavLink to="/" className="aside_list-item">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/lipo" className="aside_list-item">
          <li>Liposuccion</li>
        </NavLink>
        <NavLink to="/abdos" className="aside_list-item">
          <li>Adbominoplastie</li>
        </NavLink>
        <NavLink to="/poitrine" className="aside_list-item">
          <li>Chirurgie des seins</li>
        </NavLink>
        <NavLink to="/visage" className="aside_list-item">
          <li>Chirurgie du visage</li>
        </NavLink>
        <NavLink to="/devis" className="aside_list-item">
          <li>Obtenir un devis</li>
        </NavLink>
        <NavLink to="/faq" className="aside_list-item">
          <li href={FAQ}>FAQ</li>
        </NavLink>
      </ul>
    </section>
  );
}
