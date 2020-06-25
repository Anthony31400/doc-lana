import React, { Component } from 'react';
import './cards.css';

class TendanceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, operation, price } = this.props;
    return (
      <div className="display-country">
        <p className="display-county-name">{name}</p>
        <p className="display-county-operation">{operation}</p>
        <p className="display-county-price">{price}</p>
      </div>
    );
  }
}

export default TendanceCard;
