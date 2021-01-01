import React from 'react';
import { RouterContext } from './utils';

const Link = ({ to, children, ...options }) => (
  <RouterContext.Consumer>
    {(value) => {
      const href = to ? value.history.createHref(to) : '';

      const handleClick = (e) => {
        e.preventDefault();
        value.history.push(to);
      };
      return <a href={href} onClick={handleClick} {...options}>{children}</a>;
    }}
  </RouterContext.Consumer>
);

export default Link;
