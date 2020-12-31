import React, { useContext } from 'react';
import { RouterContext } from '../../lib/utils';
import Page from './Page.jsx';

const LotPage = () => {
  const router = useContext(RouterContext);
  return (
    <Page>
      <h1>Lot #{router.match.groups.id}</h1>
      <p>Lot description</p>
    </Page>
  );
};

export default LotPage;
