import React, { Component } from 'react';
import './globalContainer.css';
import Main from './Main';
import SideMenu from './SideMenu';

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
            <img src="./img/logowhale.svg" alt="whale" style={{ width: '70px' }} />
          </div>
          <div className="welcome">
            <h1>Hello you</h1>
          </div>
        </div>
        <div className={isActive ? 'aside active' : 'aside'}>
          <SideMenu />
          <div className="aside_close-icon">
            <button type="submit" onClick={this.handlemenu}>
              &times;
            </button>
          </div>
        </div>
        <div>
          <Main />
        </div>
        <div className="footer">
          <p>Made with love but sin motivation</p>
        </div>
      </div>
    );
  }
}

export default GlobalContaineur;
