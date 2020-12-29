import React from 'react';
import LotContainer from './LotContainer.jsx';

const Lots = ({ lots }) => (
  <div className="lots">
    {lots.map((lot) => <LotContainer lot={lot} key={lot.id} />)}
  </div>
);

export default Lots;
