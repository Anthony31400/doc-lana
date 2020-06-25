import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopCountryDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h5>{name}</h5>
      </div>
    );
  }
}

TopCountryDisplay.propTypes = {
  name: PropTypes.string.isRequired
};

export default TopCountryDisplay;
