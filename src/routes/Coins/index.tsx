import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';
import { fetchCoins } from '../../libs/api';
import { Helmet } from 'react-helmet';

export interface ICoin {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}

const Container = styled.div`
  padding: 0 10px;
  background-color: #111;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const CoinList = styled.ul`
  list-style: none;
`;

const Coin = styled.li`
  background-color: white;
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    padding: 20px;
    align-items: center;
  }
  &: hover {

  }
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

function Coins() {
  const { isLoading, data } = useQuery<ICoin[]>('allCoins', fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>코인</title>
      </Helmet>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 20).map(coin => {
            return (
              <Coin key={coin.id}>
                <Link to={`/coin/${coin.id}`} state={coin}>
                  <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                  {coin.name}
                </Link>
              </Coin>
            );
          })}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
