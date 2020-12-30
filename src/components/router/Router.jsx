import React, { useState } from 'react';
import Link from './Link.jsx';
import Route from './Route.jsx';
import { RouterContext } from '../../lib/utils';

const Router = () => {
  const [location, setLocation] = useState('a');

  const navigate = (loc) => {
    setLocation(loc);
  };

  return (
    <RouterContext.Provider value={{ location, navigate }}>
      <ul>
        <li><Link to="a">a</Link></li>
        <li><Link to="b">b</Link></li>
        <li><Link to="c">c</Link></li>
      </ul>

      <div>
        <Route path="a">
          <p>Content A</p>
        </Route>
      </div>
      <div>
        <Route path="b">
          <p>Content B</p>
        </Route>
      </div>
      <div>
        <Route path="c">
          <p>Content C</p>
        </Route>
      </div>
    </RouterContext.Provider>
  );
};

export default Router;
