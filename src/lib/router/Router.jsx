import React, { useState } from 'react';
import { RouterContext } from '../utils';

const Router = ({ children }) => {
  const [location, setLocation] = useState('a');

  const navigate = (loc) => {
    setLocation(loc);
  };

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;

// <RouterContext.Provider
//   value={{ location, navigate }}
//   children={children}
// />
