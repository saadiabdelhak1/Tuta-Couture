import React from 'react';
import './Tuta.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import tuta from '../Assets/background.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import insta from '../Assets/instagram.png';
import tiktok from '../Assets/tiktok.png'


const Tuta = () => {
  return (
    <div className="tuta">
        <div className="tuta-left">
            <h2>Custom Sewing</h2>
            <div>
                <div className="tuta-hand-icon">
                  <p>Hello</p>
                  <img src={hand_icon} alt="" />
                </div>
                <p>Choose</p>
                <p>Your Dream Dress</p>
            </div>
            <Link to='#new-collections' style={{ textDecoration: 'none', color: 'white'}}>
            <div className="tuta-latest-btn">
              Latest Collection
              <img src={arrow} alt="" />           
            </div>
            </Link>
            <div className="social-icons">
              <a href="https://instagram.com/tuta_couture"><img src={insta} alt="" /></a>
              <a href="https://www.tiktok.com/@tuta_couture"> <img src={tiktok} alt="" /></a>
            </div>    
        </div>
        <div className="tuta-right">
           <img src={tuta} alt="" />
        </div>
    </div>
  )
}

export default Tuta