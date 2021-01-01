import React, { Children, cloneElement } from 'react';
import { RouterContext, matchPath } from './utils';

const Switch = (props) => (
  <RouterContext.Consumer>
    {(value) => {
      const children = Children.toArray(props.children);
      let match;
      const child = children.find((c) => {
        match = matchPath(value.location, c.props);
        return !!match;
      });
      if (match) {
        return cloneElement(child, { computedMatch: match });
      }
      return null;
    }}
  </RouterContext.Consumer>
);

export default Switch;
