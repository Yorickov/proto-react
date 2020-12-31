import React from 'react';
import Route from '../lib/router/Route.jsx';
import HomePage from './pages/HomePage.jsx';
import LotsPage from './pages/LotsPage.jsx';
import LotPage from './pages/LotPage.jsx';
import HelpPage from './pages/HelpPage.jsx';
import NotFound from './pages/NotFound.jsx';
import Switch from '../lib/router/Switch.jsx';

const Content = () => (
  <Switch>
    <Route path="/" exact>
      <HomePage />
    </Route>
    <Route path="/lots" exact>
      <LotsPage />
    </Route>
    <Route path="/lots/:id" exact>
      <LotPage />
    </Route>
    <Route path="/help" exact>
      <HelpPage />
    </Route>
    <Route path=".*">
      <NotFound />
    </Route>
  </Switch>
);

export default Content;
