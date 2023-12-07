import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';
import NewsLetter from './Components/NewsLetter/NewsLetter';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} /> 
          <Route path='/Dresses' element={<ShopCategory banner={women_banner} category='Dresses'/>} /> 
          <Route path='/Accessories' element={<ShopCategory banner={kids_banner} category='Accessories'/>} /> 
          <Route path='/product' element={<Product/>}>
            <Route path='/productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={Cart} />
          <Route path='/login' element={LoginSignup} />
        </Routes>
        < NewsLetter />       
      </Router>
    </div>
  );
}

export default App;
