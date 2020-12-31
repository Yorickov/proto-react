import React from 'react';
import { RouterContext, matchPath } from './utils';

const Route = (props) => (
  <RouterContext.Consumer>
    {(value) => {
      const match = matchPath(value.location, props);
      if (match) {
        return <RouterContext.Provider
          value={{
            ...value,
            match,
          }}
          children={props.children}
        />;
      }
      return null;
    }}
  </RouterContext.Consumer>
);

export default Route;
