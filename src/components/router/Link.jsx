import React from 'react';

const Link = ({ to, children, navigate }) => {
  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };

  return <a href="" onClick={handleClick}>{children}</a>;
};

export default Link;
