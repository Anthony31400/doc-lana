import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalContaineur from './components/navigation/GlobalContaineur';

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
        </Router>
      </div>
    );
  }
}

export default App;
