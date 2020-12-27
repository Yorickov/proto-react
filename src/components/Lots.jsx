import React from 'react';
import Loading from './Loading.jsx';
import LotConnected from './LotConnected.jsx';

const Lots = ({ lots }) => {
  if (lots === null) {
    return <Loading />;
  }

  return (
    <div className="lots">
      {lots.map((lot) => <LotConnected lot={lot} key={lot.id} />)}
    </div>
  );
};

export default Lots;
