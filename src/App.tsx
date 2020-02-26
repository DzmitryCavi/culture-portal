import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.sass';

import Navigation from './components/navigation/navigation';
import Authors from './containers/authors/authors';
import Home from './containers/home/Home';
import Worklog from './containers/worklog/Worklog';
import Test from './containers/test/test';
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
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/styleguide">
              <Styleguide />
            </Route>
            <Route path="/authors">
              <Authors />
            </Route>
            <Route path="/test">
              <Test />
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
