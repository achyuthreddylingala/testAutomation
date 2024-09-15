// src/components/Categories.js
import React from 'react';
import './Categories.css';

const Categories = () => {
  return (
    <div className="categories">
      <h2>Shop by Category</h2>
      <div className="categories-grid">
        <div className="category-item">
          <img src="https://example.com/electronics.jpg" alt="Electronics" />
          <p>Electronics</p>
        </div>
        <div className="category-item">
          <img src="https://example.com/fashion.jpg" alt="Fashion" />
          <p>Fashion</p>
        </div>
        <div className="category-item">
          <img src="https://example.com/home-appliances.jpg" alt="Home Appliances" />
          <p>Home Appliances</p>
        </div>
        <div className="category-item">
          <img src="https://example.com/beauty.jpg" alt="Beauty" />
          <p>Beauty Products</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
