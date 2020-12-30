import React, { useState } from 'react';

const Router = () => {
  const [location, setLocation] = useState('a');

  const handleClick = (to) => (e) => {
    e.preventDefault();
    setLocation(to);
  };

  return (
    <>
      <ul>
        <li><a href="" onClick={handleClick('a')}>a</a></li>
        <li><a href="" onClick={handleClick('b')}>b</a></li>
        <li><a href="" onClick={handleClick('c')}>c</a></li>
      </ul>

      <div>{location === 'a' ? <p>Content A</p> : null}</div>
      <div>{location === 'b' ? <p>Content B</p> : null}</div>
      <div>{location === 'c' ? <p>Content C</p> : null}</div>
    </>
  );
};

export default Router;
