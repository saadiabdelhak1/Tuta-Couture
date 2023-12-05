import React from 'react';
import './Tuta.css'
import hand_icon from '../Assets/hand_icon.png';
import arrow from '../Assets/arrow.png';
import tuta from '../Assets/background.jpg';


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
            <div className="tuta-latest-btn">
              <div>Latest Collection</div> 
              <img src={arrow} alt="" />           
            </div>    
        </div>
        <div className="tuta-right">
           <img src={tuta} alt="" />
        </div>
    </div>
  )
}

export default Tuta