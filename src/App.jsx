import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalContaineur from './components/navigation/GlobalContaineur';
import Devis from './components/navigation/Devis';
import Accueil from './components/navigation/Accueil';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Router>
          <GlobalContaineur />
          <Switch>
            <Route exact path="/accueil" component={Accueil} />
          </Switch>
          <Switch>
            <Route exact path="/devis" component={Devis} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
