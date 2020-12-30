import React, { useEffect } from 'react';
import Lot from './Lot.jsx';

const LotContainer = ({ lot, subscribe, favorite, unfavorite }) => {
  useEffect(() => subscribe(lot.id), [lot.id]);
  return <Lot lot={lot} favorite={favorite} unfavorite={unfavorite} />;
};

export default LotContainer;
