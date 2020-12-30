// import React, { Children } from 'react';

const Route = ({ path, location, children }) => {
  if (location === path) {
    return children;
  }
  return null;
};

export default Route;
