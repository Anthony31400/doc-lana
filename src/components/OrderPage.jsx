import React from 'react';
import './OrderPage.css';

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preparation: true
    };
    this.handleStatusCommande = this.handleStatusCommande.bind(this);
  }

  handleStatusCommande() {
    const { preparation } = this.state;
    this.setState({ preparation: !preparation });
  }

  render() {
    const { preparation } = this.state;
    return (
      <div className="liste-commandes">
        <div className="date-commande">
          {this.props.date}
          <div className="statut-commande">
            <span className={preparation ? 'status-preparation' : 'status-livree'} />
            <button onClick={this.handleStatusCommande}> Click </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Order;
