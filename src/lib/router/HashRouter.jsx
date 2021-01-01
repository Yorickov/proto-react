import React from 'react';
import { hashHistory } from './drivers';
import Router from './Router.jsx';

const HashRouter = ({ children }) => {
  const history = hashHistory();
  return <Router history={history} children={children} />;
};

export default HashRouter;
