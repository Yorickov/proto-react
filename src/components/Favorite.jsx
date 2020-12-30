import React, { useState } from 'react';

const Favorite = ({ active, favorite, unfavorite }) => {
  const [enabled, setEnabled] = useState(true);

  const handleFavorite = async () => {
    setEnabled(false);
    try {
      await favorite();
      setEnabled(true);
    } catch (e) {
      setEnabled(true);
    }
  };

  const handleUnFavorite = async () => {
    setEnabled(false);
    try {
      await unfavorite();
      setEnabled(true);
    } catch (e) {
      setEnabled(true);
    }
  };

  return (
    active ? (
      <button type="button" onClick={handleUnFavorite} className="unfavorite" disabled={!enabled}>
        <ion-icon name="heart-sharp" /> Unfavorite
      </button>
    ) : (
      <button type="button" onClick={handleFavorite} className="favorite" disabled={!enabled}>
        <ion-icon name="heart-outline" /> Favorite
      </button>
    )
  );
};

export default Favorite;
