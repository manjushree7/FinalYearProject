import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p> ShopLocally is a digital platform for all the stalls that aims to sell the organic food items made 
              locally, chemical free and sustaibale. Customers can easily get freshly made food products that of their 
              choices. We promote healthy, fresh and sustainale food items targeting those customers whose interest is 
              on sustainable lifestyle and also other people that trying to adopt this lifestyle. 
            </p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div> 
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacu Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 9812345678</li>
            <li>shopLocally@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © shopLocally.com - All Right Reserved. </p>
    </div>
  )
}
export default Footer
