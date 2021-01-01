import React from 'react';
import { useParams } from 'react-router-dom';
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
