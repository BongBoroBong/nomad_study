import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery } from 'react-query';
import ApexChart from 'react-apexcharts';
import { fetchCoinHistory } from '../../../libs/api';

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

const Chart = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 10000 },
  );

  return (
    <div>
      {isLoading ? (
        'Loading chart...'
      ) : (
        <ApexChart
          type="line"
          height="300"
          width="300"
          series={[{ name: 'sales', data: data?.map(price => price.close) || [] }]}
          options={{
            theme: {
              mode: 'dark',
            },
            stroke: {
              curve: 'smooth',
              width: 3,
            },
            chart: {
              toolbar: {
                show: true,
              },
              background: 'transparent',
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
              type: 'datetime',
              categories: data?.map(price => price.time_close),
            },
            fill: {
              type: 'gradient',
              gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
            },
            colors: ['#0fbcf9'],
            tooltip: {
              y: {
                formatter: value => `${value.toFixed(3)}`,
              },
            },
          }}
        />
      )}
      <Outlet />
    </div>
  );
};

export default Chart;
