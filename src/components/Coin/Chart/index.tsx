import React from 'react';
import { Outlet } from 'react-router-dom';

const Chart = () => {
  return (
    <div>
      Chart
      <Outlet />
    </div>
  );
};

export default Chart;
