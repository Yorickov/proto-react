import React, { useState } from 'react';
import Link from './Link.jsx';
import Route from './Route.jsx';

const Router = () => {
  const [location, setLocation] = useState('a');

  const navigate = (loc) => {
    setLocation(loc);
  };

  return (
    <>
      <ul>
        <li><Link to="a" navigate={navigate}>a</Link></li>
        <li><Link to="b" navigate={navigate}>b</Link></li>
        <li><Link to="c" navigate={navigate}>c</Link></li>
      </ul>

      <div>
        <Route path="a" location={location}>
          <p>Content A</p>
        </Route>
      </div>
      <div>
        <Route path="b" location={location}>
          <p>Content B</p>
        </Route>
      </div>
      <div>
        <Route path="c" location={location}>
          <p>Content C</p>
        </Route>
      </div>
    </>
  );
};

export default Router;
