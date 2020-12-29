import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Favorite from './Favorite.jsx';
import * as actions from '../actions';

const lotMapDispatchToProps = {
  favorite: actions.favoriteLotAsync,
  unfavorite: actions.unfavoriteLotAsync,
  subscribe: actions.subscribeToLotPrice,
};

const Lot = ({ lot, subscribe, favorite, unfavorite }) => {
  // const handleFavorite = (id) => () => {
  //   favorite(id);
  // };
  // const handleUnFavorite = (id) => () => {
  //   unfavorite(id);
  // };

  useEffect(() => subscribe(lot.id), [lot.id]);

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
        favorite={favorite.bind(null, lot.id)}
        unfavorite={unfavorite.bind(null, lot.id)}
      />
    </article>
  );
};

export default connect(null, lotMapDispatchToProps)(Lot);
