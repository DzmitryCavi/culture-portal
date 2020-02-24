import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useTranslation, Trans } from 'react-i18next';

import './App.sass';

import Navigation from './components/navigation/navigation';
import About from './containers/about/About';
import Home from './containers/home/Home';
import Styleguide from './containers/styleguide/Styleguide';

function App() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };
  const k = '0';
  const name = 'Lutsenko';
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div>
          <nav>
            <button onClick={() => changeLanguage('ru')}>ru</button>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('by')}>by</button>
          </nav>
          <div>
            <Trans>
              {name}.timeLine.{k}.text
            </Trans>
          </div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/styleguide">
              <Styleguide />
            </Route>
            <Route path="/about">
              <About />
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
