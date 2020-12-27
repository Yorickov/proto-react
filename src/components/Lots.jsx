import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading.jsx';
import Lot from './Lot.jsx';

const mapStateToProps = (state) => ({
  lots: state.auction.lots,
});

const Lots = ({ lots }) => {
  if (lots === null) {
    return <Loading />;
  }

  return (
    <div className="lots">
      {lots.map((lot) => <Lot lot={lot} key={lot.id} />)}
    </div>
  );
};

export default connect(mapStateToProps)(Lots);
