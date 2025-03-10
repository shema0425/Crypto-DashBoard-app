import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const CryptoChart = ({ data }) => {
  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
};

export default CryptoChart;