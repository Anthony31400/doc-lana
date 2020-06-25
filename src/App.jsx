import React from 'react';
import './App.css';
import { BrowserRouter as Router /* Switch, Route */ } from 'react-router-dom';
import GlobalContaineur from './components/GlobalContaineur';
// import { BrowserRouter as Router /* Switch, Route */ } from 'react-router-dom';
// import SideMenu from './components/sidemenu/SideMenu';

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
          {/*           <Switch>
            <Route path="/lipo">
              <Lipo />
            </Route>
          </Switch> */}
        </Router>
      </div>
    );
  }
}

export default App;
