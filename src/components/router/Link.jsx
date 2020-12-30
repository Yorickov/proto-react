import React from 'react';
import { RouterContext } from '../../lib/utils';

const Link = ({ to, children }) => (
  <RouterContext.Consumer>
    {(value) => {
      const handleClick = (e) => {
        e.preventDefault();
        value.navigate(to);
      };
      return <a href="" onClick={handleClick}>{children}</a>;
    }}
  </RouterContext.Consumer>
);

export default Link;
