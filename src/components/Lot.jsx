import React from 'react';

const Lot = ({ lot }) => (
  <article className="lot">
    <div className="price">{lot.price}</div>
    <h1>{lot.name}</h1>
    <p>{lot.description}</p>
  </article>
);

export default Lot;
