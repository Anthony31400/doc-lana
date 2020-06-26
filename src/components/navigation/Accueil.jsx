import React from 'react';
import './Accueil.css';

const Accueil = () => {
  return (
    <div>
      <h1 className="title-acc">Accueil</h1>
      <p className="text-acc">
        Suivez l'actualité de la bourse de la chirurgie en direct : Cours des opérations, tarifs,
        actualités ...
      </p>
      <img src="https://zupimages.net/up/20/26/q2lw.jpg" alt="chirurgien" className="img-accueil" />
      <p className="text-acc">
        L’idéal de beauté reflète un instinct primitif ; la recherche de beauté passe souvent avant
        l’instinct de conservation, la peur de la laideur dépasse la peur de la mort.
      </p>
    </div>
  );
};

export default Accueil;
