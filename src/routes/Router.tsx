import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import { ReactQueryDevtools } from 'react-query/devtools';

import Detail from './Detail';
import Home from './Home';
import React from 'react';
import Coin from './Coin';
import Coins from './Coins';

function Router() {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
          }
        `}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/coin" element={<Coins />} />
          <Route path="/coin/:coinId/*" element={<Coin />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default Router;
