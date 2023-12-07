import React from 'react';
import './NewsLetter.css';
import insta from '../Assets/instagram.png';
import tiktok from '../Assets/tiktok.png';

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>  
      <div className='input'>
        <input type="email" placeholder='Your Email id' />
        <button>Subscribe</button>
      </div> 
      <div className="social-icons">
          <a href="https://instagram.com/tuta_couture"><img src={insta} alt="" /></a>
          <a href="https://www.tiktok.com/@tuta_couture"> <img src={tiktok} alt="" /></a>
      </div> 
      <div className="saadi">@Copyright by @saadiabdelhak1</div>  
    </div>
  )
}

export default NewsLetter