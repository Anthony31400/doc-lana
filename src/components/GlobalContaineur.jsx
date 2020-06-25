import React, { Component } from 'react';
import Calendar from 'react-calendar';
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
        <button className="menu-icon" onClick={this.handlemenu}>
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
            <button onClick={this.handlemenu}>&times;</button>
          </div>
          <ul className="aside_list">
            <li className="aside_list-item">Menu item1</li>
            <li className="aside_list-item">Menu item2</li>
            <li className="aside_list-item">Menu item3</li>
            <li className="aside_list-item">Menu item4</li>
            <li className="aside_list-item">Menu item5</li>
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
