import React, { Component } from 'react';
import TopCountryDisplay from './TopCountryDisplay';
import './cards.css';

const countries = [
  {
    id: 1,
    name: 'Ukraine',
    operation: {
      nose: {
        type: 'Nez',
        price: 2500,
        lastVariation: -150,
        lastVariationPourcent: '-6%',
        position: '-33%'
      },
      lips: {
        type: 'Lèvres',
        price: '1100 €',
        lastVariation: '+100€',
        lastVariationPourcent: '-10%',
        position: '-7%'
      },
      cheeks: {
        type: 'Joues',
        price: '700 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-6%',
        position: '-6%'
      }
    }
  },
  {
    id: 2,
    name: 'Turquie',
    operation: {
      nose: {
        type: 'Lèvres',
        price: 2700,
        lastVariation: +50,
        lastVariationPourcent: '+4%',
        position: '-24%'
      },
      lips: {
        type: 'Nez',
        price: '1050 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-7%',
        position: '-12%'
      },
      cheeks: {
        type: 'Joues',
        price: '800 €',
        lastVariation: '+50€',
        lastVariationPourcent: '+7%',
        position: '-9%'
      }
    }
  },
  {
    id: 3,
    name: 'Israel',
    operation: {
      nose: {
        type: 'Joues',
        price: 3100,
        lastVariation: +100,
        lastVariationPourcent: '+3%',
        position: '-18%'
      },
      lips: {
        type: 'Lèvres',
        price: '950 €',
        lastVariation: '-50€',
        lastVariationPourcent: '-5%',
        position: '-10%'
      },
      cheeks: {
        type: 'Nez',
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
        <div className="overviewcard">
          <p>Meilleures destinations</p>
        </div>
        <div className="country">
          <p className="country-name">Pays</p>
          <p className="country-operation">Opération</p>
          <p className="country-price">Prix</p>
          <p className="country-lastVariation">Dernière variation</p>
        </div>
        <hr />
        <div className="test-country">
          {countries.map(country => (
            <TopCountryDisplay
              name={country.name}
              operation={country.operation.nose.type}
              price={country.operation.nose.price}
              lastVariation={country.operation.nose.lastVariation}
              lastVariationPourcent={country.operation.nose.lastVariationPourcent}
              position={country.operation.nose.position}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TopCountry;
