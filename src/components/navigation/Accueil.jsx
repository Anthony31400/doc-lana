import React from 'react';
import './Accueil.css';

const Accueil = () => {
  return (
    <div className="AccueilDisplay">
      <h1 className="title-acc">Accueil</h1>
      <div className="Accueil">
        <div className="Text">
          <h2 className="text-acc">
            Suivez l'actualité de la bourse chirurgicale en direct : Cours des opérations, tarifs,
            destinations phares ...
          </h2>
          <blockquote>
            <p className="text-acc">
              <cite>
                " L’idéal de beauté reflète un instinct primitif : la recherche de la beauté passe
                souvent avant l’instinct de conservation, la peur de la laideur dépasse la peur de
                la mort. "
              </cite>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
