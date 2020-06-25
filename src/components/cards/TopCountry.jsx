import React, { Component } from 'react';
import TopCountryDisplay from './TopCountryDisplay';
import './cards.css';

const countries = [
  {
    id: 1,
    name: 'France',
    operation: {
      nose: {
        type: 'Nose',
        price: '850 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-8%',
        position: '-11%'
      },
      lips: {
        type: 'Lips',
        price: '1100 €',
        lastVariation: '+100€',
        lastVariationPourcent: '-10%',
        position: '-7%'
      },
      cheeks: {
        type: 'Cheeks',
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
        type: 'Nose',
        price: '950 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-7%',
        position: '-9%'
      },
      lips: {
        type: 'Lips',
        price: '1050 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-7%',
        position: '-8%'
      },
      cheeks: {
        type: 'Cheeks',
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
        type: 'Nose',
        price: '700 €',
        lastVariation: '-100€',
        lastVariationPourcent: '-7%',
        position: '-11%'
      },
      lips: {
        type: 'Lips',
        price: '950 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-5%',
        position: '-10%'
      },
      cheeks: {
        type: 'Cheeks',
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
        <h3>Les meilleures destinations</h3>
        <div>
          {countries.map(country => (
            <TopCountryDisplay
              name={country.name}
              operation={country.operation.nose.type}
              price={country.operation.nose.price}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TopCountry;
