// src/components/Home.js
import React from 'react';
import Header from './Header';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Bestsellers from './Bestsellers';
import NewArrivals from './NewArrivals';  // Import New Arrivals component
import Footer from './Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home-body">
        <Categories />
        <FeaturedProducts />
        <Bestsellers />
        <NewArrivals /> {/* Add New Arrivals component here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
