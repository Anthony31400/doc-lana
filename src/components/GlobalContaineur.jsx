import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './globalContainer.css';
import Resume from './Resume';

class GlobalContaineur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.handlemenu = this.handlemenu.bind(this);
  }

  handlemenu() {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  }

  render() {
    const { isActive } = this.state;
    return (
      <div className="grid-container">
        <button type="submit" className="menu-icon" onClick={this.handlemenu}>
          menu
        </button>
        <div className="header">
          <div className="logo">
            <img src="./img/logowhale.svg" alt="whale" />
          </div>
          <div className="welcome">
            <h1>Hello you</h1>
          </div>
        </div>
        <div className={isActive ? 'aside active' : 'aside'}>
          <div className="aside_close-icon">
            <button type="submit" onClick={this.handlemenu}>
              &times;
            </button>
          </div>
          <ul className="aside_list">
            <NavLink to="/" className="aside_list-item">
              Accueil
            </NavLink>
            <NavLink to="/item1" className="aside_list-item">
              Liposuccion
            </NavLink>
            <NavLink to="/item1" className="aside_list-item">
              Adbominoplastie
            </NavLink>
            <NavLink to="/item1" className="aside_list-item">
              Chirurgie des seins
            </NavLink>
            <NavLink to="/item1" className="aside_list-item">
              Chirurgie du visage
            </NavLink>
            <NavLink to="/item1" className="aside_list-item">
              Obtenir un devis
            </NavLink>
          </ul>
        </div>
        <div className="main grid main-cards">
          <div className="actual card" />
          <div className="courbe card" />
          <div className="news card" />
          <div className="topcountry card">
            <div className="overviewcard" />
          </div>
          <div className="tendance card">
            <Resume />
          </div>
        </div>
        <div className="footer">
          <p>Made with love but sin motivation</p>
        </div>
      </div>
    );
  }
}

export default GlobalContaineur;
