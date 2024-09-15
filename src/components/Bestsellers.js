// src/components/Bestsellers.js
import React from 'react';
import './Bestsellers.css';

const Bestsellers = () => {
  const products = [
    { id: 1, name: 'Smart TV', price: '$499', img: 'https://example.com/smart-tv.jpg' },
    { id: 2, name: 'Air Purifier', price: '$229', img: 'https://example.com/air-purifier.jpg' },
    { id: 3, name: 'Bluetooth Speaker', price: '$89', img: 'https://example.com/bluetooth-speaker.jpg' },
    { id: 4, name: 'Gaming Console', price: '$399', img: 'https://example.com/gaming-console.jpg' },
  ];

  return (
    <div className="bestsellers">
      <h2>Bestsellers</h2>
      <div className="bestsellers-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;

