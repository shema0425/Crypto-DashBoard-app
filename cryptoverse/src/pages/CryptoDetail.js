import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoChart from '../components/CryptoChart';
import { useParams, useNavigate } from 'react-router-dom';
import './CryptoDetail.css';

const CryptoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crypto, setCrypto] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
      );
      setCrypto(response.data);
    };
    fetchData();
  }, [id]);

  if (!crypto) return <div>Please Wait.....</div>;

  const chartData = {
    labels: crypto.prices.map((price) => new Date(price[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Price',
        data: crypto.prices.map((price) => price[1]),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div className="crypto-detail">
      <h1 className="detail-heading">{id.toUpperCase()} Price Chart</h1>
      <button onClick={() => navigate('/')} className="back-button">
        Back to Dashboard
      </button>
      <div className="chart-container">
        <CryptoChart data={chartData} />
      </div>
    </div>
  );
};

export default CryptoDetail;