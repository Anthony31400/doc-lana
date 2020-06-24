import React from 'react';

class NewPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      firstname: '',
      phone: '',
      email: '',
      adress: '',
      zip: '',
      city: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    alert('Le patient ' + this.state.name + this.state.firstname + ' a bien été ajouté');
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Nom :
          <input value={this.state.name} onChange={this.handleChange} />
        </label>
        <label>
          Prénom :
          <input
            type="text"
            name="firstname"
            onChange={this.handleChange}
            value={this.state.firstname}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    );
  }
}

export default NewPatient;
