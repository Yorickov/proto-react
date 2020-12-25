import React from 'react';
import cn from 'classnames';
import Favorite from './Favorite';

const Lot = ({ lot, favorite, unfavorite }) => {
  const articleClasses = cn({
    lot: true,
    favorite: lot.favorite,
  });

  return (
    <article className={articleClasses}>
      <div className="price">{lot.price}</div>
      <h1>{lot.name}</h1>
      <p>{lot.description}</p>
      <Favorite
        active={lot.favorite}
        favorite={() => favorite(lot.id)}
        unfavorite={() => unfavorite(lot.id)}
      />
    </article>
  );
};

export default Lot;
