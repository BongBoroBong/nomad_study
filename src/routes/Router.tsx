import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

import Detail from './Detail';
import Home2 from './Home';
import React from 'react';
import Coin from './Coin';
import Coins from './Coins';
import TodoList from '../components/TodoList';
import Tv from './NomFlix/Tv';
import Search from './NomFlix/Search';
import Home from './NomFlix/Home';
import Header from '../components/Header';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/home" element={<Home2 />} />
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
