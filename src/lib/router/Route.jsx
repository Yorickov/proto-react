import React from 'react';
import { RouterContext, matchPath } from '../utils';

const Route = ({ path, children }) => (
  <RouterContext.Consumer>
    {(value) => {
      const match = matchPath(value.location, path);
      if (match) {
        return <RouterContext.Provider
          value={{
            ...value,
            match,
          }}
          children={children}
        />;
      }
      return null;
    }}
  </RouterContext.Consumer>
);

export default Route;
