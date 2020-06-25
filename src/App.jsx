import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowDoctor from './components/doctor/ShowDoctor';
import Appointement from './components/calendar/Appointement';
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
          <Switch>
            <Route path="/doctor">
              <ShowDoctor />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
