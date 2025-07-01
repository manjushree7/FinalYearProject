import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = ({ asPage }) => {
  return (
    <div className={`${asPage ? 'contact-page' : 'footer'}`} id={asPage ? 'contact' : 'footer'}>
      <div className="content-container">
        <div className="content-left">
          <img src={assets.logo} alt="ShopLocally" />
          <p>ShopLocally is a digital platform for all the stalls that aims to sell the organic food items made 
            locally, chemical free and sustainable. Customers can easily get freshly made food products that of their 
            choices.
          </p>
          <div className="social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div> 
        
        <div className="content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div className="content-right">
          <h2>{asPage ? 'CONTACT US' : 'GET IN TOUCH'}</h2>
          <ul>
            <li>+977 9812345678</li>
            <li>shopLocally@gmail.com</li>
            {asPage && <li>Kathmandu, Nepal</li>}
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">Copyright 2024 © shopLocally.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;