import React from 'react';
import { RouterContext } from '../utils';

const Route = ({ path, children }) => (
  <RouterContext.Consumer>
    {(value) => {
      if (value.location === path) {
        return children;
      }
      return null;
    }}
  </RouterContext.Consumer>
);

export default Route;
