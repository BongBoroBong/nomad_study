import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export interface CoinInterface {
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

const CoinList = styled.ul``;

const Coin = styled.li``;

const Img = styled.img`
  width: 25px;
  height: 25px;
`;

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/coins')
      .then(response => response.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {loading ? (
        'Loading...'
      ) : (
        <CoinList>
          {coins.slice(0, 20).map(coin => {
            return (
              <Coin key={coin.id}>
                <Link to={`/coin/:${coin.id}`} state={coin}>
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
