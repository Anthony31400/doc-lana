import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cards.css';

class TopCountryDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, operation, price, lastVariation, lastVariationPourcent, position } = this.props;
    return (
      <div>
        <div className="display-country">
          <p className="display-country-name">{name}</p>
          <p className="display-country-operation">{operation}</p>
          <p className="display-country-price">{price} €</p>
          <p
            className={
              lastVariation < 0
                ? 'display-country-lastVariation'
                : 'display-country-lastVariation-pos'
            }
          >
            {lastVariation} €
          </p>
          <div className="display-country-position-global">
            <p className="display-country-position-name">Réduction moyenne :</p>
            <p className="display-country-position-value">{position}</p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

TopCountryDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  lastVariation: PropTypes.string.isRequired,
  lastVariationPourcent: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default TopCountryDisplay;
