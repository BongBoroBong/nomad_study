import React from 'react';
import { Outlet } from 'react-router-dom';

interface PriceProps {
  coinId: string;
}

const Price = ({}: PriceProps) => {
  return (
    <div>
      Price
      <Outlet />
    </div>
  );
};

export default Price;
