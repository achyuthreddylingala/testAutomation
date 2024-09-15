// src/components/FeaturedProducts.js
import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Laptop', price: '$999', img: 'https://example.com/laptop.jpg' },
    { id: 2, name: 'Headphones', price: '$199', img: 'https://example.com/headphones.jpg' },
    { id: 3, name: 'Smartphone', price: '$799', img: 'https://example.com/smartphone.jpg' },
    { id: 4, name: 'Watch', price: '$299', img: 'https://example.com/watch.jpg' },
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="products-grid">
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

export default FeaturedProducts;
