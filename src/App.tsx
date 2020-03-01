import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.sass';

import Navigation from './components/navigation/navigation';
import Directors from './containers/directors/directors';
import Director from './containers/director/Director';
import Home from './containers/home/Home';
import Worklog from './containers/worklog/Worklog';
import Styleguide from './containers/styleguide/Styleguide';
import Team from './containers/team/Team';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation();
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div>
          <Switch>
            <Route path="/styleguide">
              <Styleguide />
            </Route>
            <Route path="/director/:directorName">
              <Director />
            </Route>
            <Route path="/authors">
              <Directors />
            </Route>
            <Route path="/worklog">
              <Worklog />
            </Route>
            <Route path="/Team">
              <Team />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
