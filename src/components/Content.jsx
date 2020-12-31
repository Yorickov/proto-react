import React from 'react';
import Route from '../lib/router/Route.jsx';
import HomePage from './pages/HomePage.jsx';
import LotsPage from './pages/LotsPage.jsx';
import LotPage from './pages/LotPage.jsx';
import HelpPage from './pages/HelpPage.jsx';

const Content = () => (
  <>
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
  </>
);

export default Content;
