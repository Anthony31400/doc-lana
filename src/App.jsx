import React from 'react';
import './App.css';
import GlobalContaineur from './components/GlobalContaineur';
import ShowDoctor from './components/doctor/ShowDoctor';
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
        <GlobalContaineur />
        {/*         <Router>
          <SideMenu />
           <Switch>
            <Route path="/userpage">
              <UserPage />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/pharmacy">
              <Pharmacy />
            </Route>
            <Route path="/messagerie">
              <Messagerie />
            </Route>
            <Route path="/doctor">
              <Doctor />
            </Route>
            <Route exact path="/">
              <Dashboard />
            </Route>
          </Switch> 
        </Router> */}
      </div>
    );
  }
}

export default App;
