import React from 'react';

class ShowDoctor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="ShowDoctor">
        <img src="" alt="Doc Raoult" />
        <div className="DocInfos">
          <h3>Nom/Prénom</h3>
          <p>Adresse/Ville/Code postal</p>
          <p>Téléphone/Mail</p>
        </div>
      </section>
    );
  }
}

ShowDoctor.propTypes = {};

export default ShowDoctor;
