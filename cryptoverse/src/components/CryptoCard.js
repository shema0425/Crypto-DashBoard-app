import React from 'react';
import { Link } from 'react-router-dom';
import './CryptoCard.css'; // Add this file for card-specific styles

const CryptoCard = ({ id, name, image, price }) => {
  return (
    <div className="crypto-card">
      <img src={image} alt={name} className="crypto-image" />
      <h3 className="crypto-name">{name}</h3>
      <p className="crypto-price">${price.toLocaleString()}</p>
      <Link to={`/crypto/${id}`} className="details-link">
        More Details
      </Link>
    </div>
  );
};

export default CryptoCard;