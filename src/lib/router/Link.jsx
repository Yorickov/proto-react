import React from 'react';
import { RouterContext } from './utils';

const Link = ({ to, children, ...options }) => (
  <RouterContext.Consumer>
    {(value) => {
      const handleClick = (e) => {
        e.preventDefault();
        value.navigate(to);
      };
      return <a href="" onClick={handleClick} {...options}>{children}</a>;
    }}
  </RouterContext.Consumer>
);

export default Link;
