import React from 'react';
import Route from '../lib/router/Route.jsx';

const Content = () => (
  <>
    <Route path="/">
      HomePage
    </Route>
    <Route path="/lots">
      LotsPage
    </Route>
    <Route path="/help">
      HelpPage
    </Route>
  </>
);

export default Content;
