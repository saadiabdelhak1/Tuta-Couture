import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';
import ShopCategory from './Components/Pages/ShopCategory';
import Product from './Components/Pages/Product';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cart from './Components/Pages/Cart';
import LoginSignup from './Components/Pages/LoginSignup';



function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} /> 
          <Route path='/Dresses' element={<ShopCategory category="dresses"/>} /> 
          <Route path='/Accessories' element={<ShopCategory category="Accessories"/>} /> 
          <Route path='/product' element={<Product/>}>
            <Route path='/productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={Cart} />
          <Route path='/login' element={LoginSignup} />
        </Routes>       
      </Router>
    </div>
  );
}

export default App;
