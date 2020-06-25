import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalContaineur from './components/navigation/GlobalContaineur';
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
            <Route path="/accueil">
              <Accueil />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
