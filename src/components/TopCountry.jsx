import React, { Component } from 'react';
import TopCountryDisplay from './TopCountryDisplay';

const countries = [
  {
    id: 1,
    name: 'France',
    operation: {
      nose: {
        price: '850 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-8%',
        position: '-11%'
      },
      lips: {
        price: '1100 €',
        lastVariation: '+100€',
        lastVariationPourcent: '-10%',
        position: '-7%'
      },
      cheeks: {
        price: '700 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-6%',
        position: '-6%'
      }
    }
  },
  {
    id: 2,
    name: 'Israel',
    operation: {
      nose: {
        price: '950 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-7%',
        position: '-9%'
      },
      lips: {
        price: '1050 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-7%',
        position: '-8%'
      },
      cheeks: {
        price: '800 €',
        lastVariation: '+50€',
        lastVariationPourcent: '+7%',
        position: '-7%'
      }
    }
  },
  {
    id: 3,
    name: 'Turkey',
    operation: {
      nose: {
        price: '700 €',
        lastVariation: '-100€',
        lastVariationPourcent: '-7%',
        position: '-11%'
      },
      lips: {
        price: '950 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-5%',
        position: '-10%'
      },
      cheeks: {
        price: '650 €',
        lastVariation: '+50€',
        lastVariationPourcent: '+6%',
        position: '-9%'
      }
    }
  }
];

class TopCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Les meilleures destinations</h2>
        <div className="prescription-list">
          {countries.map(country => (
            <TopCountryDisplay name={country.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default TopCountry;
