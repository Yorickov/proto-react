import React from 'react';
import Loading from './Loading';
import LotConnected from './LotConnected';

const Lots = ({ lots }) => {
  if (lots === null) {
    return <Loading />;
  }

  return (
    <div className="lots">
      {lots.map((lot) =>
        <LotConnected lot={lot} key={lot.id} />)}
    </div>
  )
};

export default Lots;
