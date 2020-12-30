import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Lot from './Lot.jsx';
import * as actions from '../actions';

const mapDispatchToProps = {
  subscribe: actions.subscribeToLotPrice,
};

const LotContainer = ({ lot, subscribe }) => {
  useEffect(() => subscribe(lot.id), [lot.id]);
  return <Lot lot={lot} />;
};

export default connect(null, mapDispatchToProps)(LotContainer);
