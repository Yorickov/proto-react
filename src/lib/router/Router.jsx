import React, { useState, useEffect } from 'react';
import { RouterContext } from './utils';

const Router = ({ children }) => {
  const { state } = window.history;
  const [location, setLocation] = useState(
    state ? state.location : window.location.pathname,
  );

  useEffect(() => {
    const listener = (event) => {
      const { state } = event;
      setLocation(state ? state.location : window.location.pathname);
    };
    window.addEventListener('popstate', listener, false);
    return () => {
      window.removeEventListener('popstate', listener);
    };
  }, [setLocation]);

  const navigate = (location) => {
    const state = { location };
    window.history.pushState(state, '', location);
    window.dispatchEvent(new PopStateEvent('popstate', { state }));
  };

  const createHref = (path) => path;

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
