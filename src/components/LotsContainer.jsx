import React, { useState, useEffect } from 'react';
import update from 'immutability-helper';
import Loading from './Loading.jsx';
import Lots from './Lots.jsx';
import AlertError from './AlertError.jsx';
import stream from '../lib/utils';
import api from '../lib/api';

const LotsContainer = () => {
  const [items, setItems] = useState({
    lots: [],
    loading: false,
    loaded: false,
    error: null,
  });

  const { loading, loaded, error } = items;

  useEffect(async () => {
    if (!loaded && !loading && error === null) {
      setItems({
        ...items,
        loading: true,
        loaded: false,
        error: null,
      });

      try {
        const lots = await api.get('/lots');
        setItems({
          ...items,
          lots,
          loading: false,
          loaded: true,
          error: null,
        });
      } catch (e) {
        setItems({
          ...items,
          loading: false,
          loaded: false,
          error: e.message,
        });
      }
    }
  }, [loaded, loading, error]);

  if (error !== null) {
    return <AlertError message={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (!loaded) {
    return null;
  }

  const subscribe = (id) => (
    stream.subscribe(`price-${id}`, (data) => {
      setItems((items) => {
        const index = items.lots.findIndex((i) => i.id === data.id);
        const newLots = update(items.lots, { [index]: { price: { $set: data.price } } });
        return { ...items, lots: newLots };
      });
    }));

  const favorite = (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    const index = items.lots.findIndex((l) => l.id === id);
    const newLots = update(items.lots, { [index]: { favorite: { $set: true } } });
    setItems({ ...items, lots: newLots });
  };

  const unfavorite = (id) => async () => {
    await api.post(`/lots/${id}/favorite`);
    const index = items.lots.findIndex((l) => l.id === id);
    const newLots = update(items.lots, { [index]: { favorite: { $set: false } } });
    setItems({ ...items, lots: newLots });
  };

  return (
    <Lots
      lots={items.lots}
      subscribe={subscribe}
      favorite={favorite}
      unfavorite={unfavorite}
    />
  );
};

export default LotsContainer;
