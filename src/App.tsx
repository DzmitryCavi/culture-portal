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
import Test from './containers/test/test';
import Styleguide from './containers/styleguide/Styleguide';

function App() {
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
