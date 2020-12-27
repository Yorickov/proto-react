import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import Favorite from './Favorite.jsx';
import api from '../lib/api';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  favorite: (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    dispatch(actions.favoriteLot(id));
  },
  unfavorite: (id) => async () => {
    await api.post(`/lots/${id}/unfavorite`);
    dispatch(actions.unfavoriteLot(id));
  },
});

const Lot = ({ lot, favorite, unfavorite }) => {
// ({ lot, favorite, unfavorite, dispatch }
//   const favorite = (id) => async () => {
//     await api.post(`/lots/${id}/favorite`);
//     dispatch(actions.favoriteLot(id));
//   };
//   const unfavorite = (id) => async () => {
//     await api.post(`/lots/${id}/unfavorite`);
//     dispatch(actions.unfavoriteLot(id));
//   }

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
        favorite={favorite(lot.id)}
        unfavorite={unfavorite(lot.id)}
      />
    </article>
  );
};

export default connect(null, mapDispatchToProps)(Lot);
