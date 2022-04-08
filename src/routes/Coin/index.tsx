import React from 'react';
import { useLocation } from 'react-router-dom';
import { CoinInterface } from '../Coins';

function Coin() {
  const location = useLocation();
  const state = location.state as CoinInterface;

  console.log('state', state);

  return <h1>Coin : {state.id}</h1>;
}

export default Coin;
