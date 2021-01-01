import React, { useState, useEffect } from 'react';
import { RouterContext } from './utils';

const Router = ({ children, history }) => {
  const [location, setLocation] = useState(history.location);

  useEffect(() => (
    history.listen((location) => {
      setLocation(location);
    })
  ), [history, setLocation]);

  return (
    <RouterContext.Provider value={{ location, history }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;

// <RouterContext.Provider
//   value={{ location, navigate }}
//   children={children}
// />
