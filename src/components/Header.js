// src/components/Header.js
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="header-search">
        <input type="text" placeholder="Search for products..." />
        <button type="submit">Search</button>
      </div>

      <div className="header-nav">
        <Link to="/login">Login</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
