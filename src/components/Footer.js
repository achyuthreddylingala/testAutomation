// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>Learn more about our platform and what we offer.</p>
      </div>
      <div className="footer-section">
        <h4>Help & Support</h4>
        <ul>
          <li><a href="/help">Customer Service</a></li>
          <li><a href="/returns">Returns & Refunds</a></li>
          <li><a href="/shipping">Shipping Info</a></li>
          <li><a href="/faq">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Account</h4>
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Create Account</a></li>
          <li><a href="/account">Your Account</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: support@shopping.com</p>
        <p>Phone: +1 (555) 123-4567</p>
      </div>
      <div className="footer-section social-icons">
        <h4>Follow Us</h4>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="footer-section newsletter">
        <h4>Newsletter</h4>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Shopping Platform - All Rights Reserved.</p>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/cookies">Cookies Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
