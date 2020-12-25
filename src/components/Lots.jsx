import React from 'react';
import Loading from './Loading';
import Lot from './Lot';

const Lots = ({ lots, favorite, unfavorite }) => {
  if (lots === null) {
    return <Loading />;
  }

  return (
    <div className="lots">
      {lots.map((lot) =>
        <Lot
          lot={lot}
          favorite={favorite}
          unfavorite={unfavorite}
          key={lot.id}
        />)}
    </div>
  )
};

export default Lots;
