import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Logoshop2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import faX from '../Assets/x.png';
import faBars from '../Assets/bars.png';


const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  return (
    <div className='navbar'>
      <div className="navbar-container">
        <div className="nav-logo">
          <Link to='/'>
            <img src={logo} alt="" /> 
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link> 
            </li>
            <li className="nav-item">
              <Link to='/Dresses' className='nav-links' onClick={closeMobileMenu}>
              Dresses
              </Link> 
            </li>
            <li className="nav-item">
              <Link to='/Accessories' className='nav-links' onClick={closeMobileMenu}>
              Accessories
              </Link> 
            </li>
            
        </ul>
        <div className="nav-login-cart">
            <Link to='/LoginSignup'><button>Login</button></Link>
            <Link to='/Cart'><div className="cart-icon">
              <FontAwesomeIcon icon={faCartShopping} size="xl" color='white'/>
            </div></Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <img src={faX}/> : <img src={faBars}/>}
        </div>
      </div>
    </div>
  )
}

export default Navbar