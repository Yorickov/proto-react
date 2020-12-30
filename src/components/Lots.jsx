import React from 'react';
import LotContainer from './LotContainer.jsx';

const Lots = ({ lots, subscribe, favorite, unfavorite }) => (
  <div className="lots">
    {lots.map((lot) => (
      <LotContainer
        lot={lot}
        subscribe={subscribe}
        favorite={favorite}
        unfavorite={unfavorite}
        key={lot.id}
      />
    ))}
  </div>
);

export default Lots;
