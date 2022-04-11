import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { CoinInterface } from '../Coins';
import Price from '../../components/Coin/Price';
import Chart from '../../components/Coin/Chart';

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

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Description = styled.p`
  margin: 20px 0px;
`;

interface ITag {
  coin_counter: number;
  ico_counter: number;
  id: string;
  name: string;
}

interface IParent {
  id: string;
  name: string;
  symbol: string;
}

interface IInfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  contract: string;
  platform: string;
  contracts: object;
  parent: IParent;
  tags: ITag[];
  team: object;
  description: string;
  message: string;
  open_source: boolean;
  started_at: object;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface IPriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: object;
}

function Coin() {
  const location = useLocation();
  const state = location.state as CoinInterface;
  const { coinId } = useParams();

  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<IInfoData>();
  const [priceInfo, setPriceInfo] = useState<IPriceData>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceInfoData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceInfoData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Container>
      <Header>
        <Title>{state.name || 'Loading...'}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{info?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${info?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source:</span>
              <span>{info?.open_source ? 'Yes' : 'No'}</span>
            </OverviewItem>
          </Overview>
          <Description>{info?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{priceInfo?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{priceInfo?.max_supply}</span>
            </OverviewItem>
          </Overview>

          <Routes>
            <Route path={`price`} element={<Price />} />
            <Route path={`chart`} element={<Chart />} />
          </Routes>
        </>
      )}
    </Container>
  );
}

export default Coin;
