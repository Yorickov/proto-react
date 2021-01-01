import React from 'react';
import { Link } from 'react-router-dom';
import Page from './Page.jsx';

const HelpPage = () => (
  <Page>
    <h1>Help</h1>
    <p>Go to <Link to="/lots">lots</Link> and:</p>
    <ul>
      <li>Choose a lot</li>
      <li>Add the lot to favorite list</li>
    </ul>
    <p>Back to <Link to="/">home page</Link></p>
  </Page>
);

export default HelpPage;
