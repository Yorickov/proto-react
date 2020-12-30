import React from 'react';
import Page from './Page.jsx';
import Link from '../../lib/router/Link.jsx';

const HomePage = () => (
  <Page>
    <h1>Welcome to auction!</h1>
    <p>View <Link to="/lots">our lots</Link> or read <Link to="/help">help</Link></p>
  </Page>
);

export default HomePage;
