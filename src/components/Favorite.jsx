import React from 'react';

const Favorite = ({ active, favorite, unfavorite }) => (
  active ? (
    <button type="button" onClick={unfavorite} className="unfavorite">
      <ion-icon name="heart-sharp" /> Unfavorite
    </button>
  ) : (
    <button type="button" onClick={favorite} className="favorite">
      <ion-icon name="heart-outline" /> Favorite
    </button>
  )
);

export default Favorite;
