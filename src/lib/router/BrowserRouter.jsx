import React from 'react';
import { browserHistory } from './drivers';
import Router from './Router.jsx';

const BrowserRouter = ({ children }) => {
  const history = browserHistory();
  return <Router history={history} children={children} />;
};

export default BrowserRouter;
