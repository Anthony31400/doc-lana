import React, { Component } from 'react';
import './FAQ.css';

class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="faq">
        <h1 className="title-faq">Les questions les plus fréquentes</h1>

        <h2 className="titre-spec">Liposuccion</h2>
        <p></p>
        <p className="question">
          ○ L'opération de la liposuccion apporte-t-elle un résultat définitif ?
        </p>
        <p className="reponse">
          Lorsque la liposuccion est correctement réalisée et les mesures hygièno-diététiques
          observées les résultats sont définitifs.
        </p>
        <br></br>
        <p className="question">○ Y a-t-il des cicatrices après ?</p>
        <p className="reponse">
          Les cicatrices d’une lipoaspiration sont discrètes, peu profondes, elles sont dissimulées
          dans un pli naturel.
        </p>
        <p></p>
        <h2 className="titre-spec">Abdominoplastie</h2>
        <p></p>
        <p className="question">
          ○ Puis-je continuer à pratiquer un sport après une abdominoplastie ?
        </p>
        <p className="reponse">
          Le sport peut être repris au bout de 2 à 3 semaines après une plastie abdominale.
        </p>
        <br></br>
        <p className="question">○ Combien de temps dure l'opération?</p>
        <p className="reponse">L'intervention peut durer entre 1h et 3h.</p>
        <p></p>
        <h2 className="titre-spec">Chirurgie de la poitrine</h2>
        <p></p>
        <p className="question">○ Est ce une opération douloureuse ?</p>
        <p className="reponse">
          Il n’existe pas de réponse universelle, puisque vous n’êtes pas égales face à cette
          sensation.
        </p>
        <br></br>
        <p className="question">○ Garde-t-on les prothèses à vie ?</p>
        <p className="reponse">
          On considère la durée de vie d’une prothèse mammaire d’environ 10 à 15 années.
        </p>
        <p></p>
        <h2 className="titre-spec">Chirurgie du visage</h2>
        <p></p>
        <p className="question">○ Quel traitement pour un double menton ?</p>
        <p className="reponse">
          Le traitement chirurgical du double menton repose sur la liposuccion, la génioplastie ou
          le lifting
        </p>
        <br></br>
        <p className="question">○ Y aura-t-il un plâtre ou une attelle sur le nez ?</p>
        <p className="reponse">
          Oui, dans l’immense majorité des cas, une attelle métallique est placée sur le nez en fin
          d’intervention.
        </p>
        <br></br>
        <hr />
      </div>
    );
  }
}

export default FAQ;
