import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './globalContainer.css';
import Main from './Main';
import Devis from './Devis';
import Accueil from './Accueil';
import SideMenu from './SideMenu';
import FAQ from './FAQ';

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
      <Router>
        <div className="grid-container">
          <button type="submit" className="menu-icon" onClick={this.handlemenu}>
            menu
          </button>
          <div className="header">
            <div className="welcome">
              <h1>Pimp my fat</h1>
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
          <Switch>
            <Route exact path="/visage" component={Main} />
            <Route exact path="/devis" component={Devis} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/" component={Accueil} />
          </Switch>
          <div className="footer">
            <p>Made with love without any motivation</p>
          </div>
        </div>
      </Router>
    );
  }
}

export default GlobalContaineur;
