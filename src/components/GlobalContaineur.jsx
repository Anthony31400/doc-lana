import React, { Component } from 'react';
import './globalContainer.css';

class GlobalContaineur extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex global">
        <div className="header flex">
          <div className="logo color">
            <h1>logo</h1>
          </div>
          <div className="welcome color">
            <h1>message</h1>
          </div>
        </div>
        <div className="main flex">
          <div className="menu color" />
          <div className="dashboard grid">
            <div className="prescription color" />
            <div className="rdv color" />
            <div className="commandes color" />
            <div className="medecin color" />
            <div className="messagerie color" />
            <div className="robot color" />
          </div>
        </div>
      </div>
    );
  }
}

export default GlobalContaineur;
