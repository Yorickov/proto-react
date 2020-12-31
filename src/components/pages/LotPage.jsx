import React from 'react';
import { useParams } from '../../lib/router/utils';
import Page from './Page.jsx';

const LotPage = () => {
  const params = useParams();
  return (
    <Page>
      <h1>Lot #{params.id}</h1>
      <p>Lot description</p>
    </Page>
  );
};

export default LotPage;
