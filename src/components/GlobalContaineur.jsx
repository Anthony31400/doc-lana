import React, { Component } from 'react';
import './globalContainer.css';

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
          <div class="aside_close-icon">
            <button onClick={this.handlemenu}>&times;</button>
          </div>
          <ul class="aside_list">
            <li class="aside_list-item">Menu item1</li>
            <li class="aside_list-item">Menu item2</li>
            <li class="aside_list-item">Menu item3</li>
            <li class="aside_list-item">Menu item4</li>
            <li class="aside_list-item">Menu item5</li>
          </ul>
        </div>
        <div className="main grid main-cards">
          <div className="prescription card" />
          <div className="rdv card" />
          <div className="commandes card" />
          <div className="medecin card" />
          <div className="messagerie card" />
          <div className="robot card" />
          <div className="calendar card" />
        </div>
        <div className="footer">
          <p>Made with love but sin motivation</p>
        </div>
      </div>
    );
  }
}

export default GlobalContaineur;
