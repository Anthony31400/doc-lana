import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopCountry.css';

class TopCountryDisplay extends Component {
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

TopCountryDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};

export default TopCountryDisplay;
