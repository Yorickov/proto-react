import React from 'react';

const Favorite = ({ active }) => (
  active ? (
    <button type="button" className="unfavorite">
      <ion-icon name="heart-sharp" /> Unfavorite
    </button>
  ) : (
    <button type="button" className="favorite">
      <ion-icon name="heart-outline" /> Favorite
    </button>
  )
);

export default Favorite;
