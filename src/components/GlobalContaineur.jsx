import React, { Component } from 'react';
import Calendar from 'react-calendar';
import { NavLink } from 'react-router-dom';
import './globalContainer.css';
import 'react-calendar/dist/Calendar.css';
import ShowDoctor from './doctor/ShowDoctor';
import PharmacyList from './pharmacy/PharmacyList';

class GlobalContaineur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      date: new Date()
    };
    this.handlemenu = this.handlemenu.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  handlemenu() {
    const { isActive } = this.state;
    this.setState({ isActive: !isActive });
  }

  render() {
    const { isActive, date } = this.state;
    return (
      <div className="grid-container">
        <button type="submit" className="menu-icon" onClick={this.handlemenu}>
          menu
        </button>
        <div className="header">
          <div className="logo">
            <h1>logo</h1>
          </div>
          <div className="welcome">
            <h1>message</h1>
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
          <div className="prescription card" />
          <div className="calendar card">
            <Calendar value={date} />
          </div>
          <div className="rdv card" />
          <div className="commandes card">
            <div className="overviewcard">
              <p>Mes pharmacies</p>
            </div>
            <PharmacyList />
          </div>
          <div className="medecin card">
            <div className="overviewcard">
              <p>Mes medecins</p>
            </div>
            <ShowDoctor />
          </div>
          <div className="messagerie card" />
          <div className="robot card" />
        </div>
        <div className="footer">
          <p>Made with love but sin motivation</p>
        </div>
      </div>
    );
  }
}

export default GlobalContaineur;
