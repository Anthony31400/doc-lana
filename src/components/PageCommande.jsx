import React from 'react';

class Commandes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commande: '',
      status: ''
    };
  }

  render() {
    return (
      <div className="liste-commandes">
        <ul>
          <li>Commande du 25 Juin - En préparation</li>
          <li>Commande du 22 Avril - Livrée</li>
          <li>Commande du 03 Mars - Livrée</li>
        </ul>
      </div>
    );
  }
}

export default Commandes;
