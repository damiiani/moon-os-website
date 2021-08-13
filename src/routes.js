import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Documentation from './pages/Documentation';
import Download from './pages/Download';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/documentation" component={Documentation} />
        <Route path="/download" component={Download} />
        <Route />
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
