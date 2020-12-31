import React, { useState, useEffect } from 'react';
import { RouterContext } from './utils';

const Router = ({ children }) => {
  const [location, setLocation] = useState(
    window.location.hash.slice(1) || '/',
  );

  useEffect(() => {
    const listener = () => {
      setLocation(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', listener, false);
    return () => {
      window.removeEventListener('hashchange', listener);
    };
  }, [setLocation]);

  const navigate = (loc) => {
    window.location.hash = loc;
  };

  const createHref = (path) => `#${path}`;

  return (
    <RouterContext.Provider value={{ location, navigate, createHref }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;

// <RouterContext.Provider
//   value={{ location, navigate }}
//   children={children}
// />
