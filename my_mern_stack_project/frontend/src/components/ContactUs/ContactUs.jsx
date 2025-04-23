import React from 'react';
import './ContactUs.css'; 
import { assets } from '../../assets/assets';

const ContactUs = () => {
  return (
    <div className='contact-us' id='contact'>
      <div className="contact-content">
        <div className="contact-left">
          <img src={assets.logo} alt="ShopLocally Logo" />
          <p>
            ShopLocally is a digital platform for all the stalls that aims to sell 
            organic food items made locally, chemical free and sustainable.
          </p>
          <div className="contact-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        
        <div className="contact-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        
        <div className="contact-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+977 9812345678</li>
            <li>shopLocally@gmail.com</li>
            <li>Kathmandu, Nepal</li> {/* Added address for contact page */}
          </ul>
        </div>
      </div>
      <hr />
      <p className="contact-copyright">
        Copyright 2024 © shopLocally.com - All Right Reserved.
      </p>
    </div>
  );
}

export default ContactUs;