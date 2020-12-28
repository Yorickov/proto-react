import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Favorite from './Favorite.jsx';
import * as actions from '../actions';

const actionCreators = {
  favorite: actions.favoriteLotAsync,
  unfavorite: actions.unfavoriteLotAsync,
};

const Lot = ({ lot, favorite, unfavorite }) => {
  // const handleFavorite = (id) => () => {
  //   favorite(id);
  // };
  // const handleUnFavorite = (id) => () => {
  //   unfavorite(id);
  // };

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

export default connect(null, actionCreators)(Lot);
