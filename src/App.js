import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {useState, useContext} from 'react'
import {CartContext} from './CartContext'

function App() {

  const[cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter >
      <CartContext.Provider value = {{cartItems, setCartItems}}>
        <div className = 'homeBar'>
          <Link to="/" className = 'homeBarLabel'>HomePage</Link>
          <Link to="/" className = 'homeBarLabel'>Fruit</Link>
          <Link to="/" className = 'homeBarLabel'>Clothes</Link>
          <Link to="/" className = 'homeBarLabel'>Others</Link>
          <Link to="/Checkout"  className = 'homeBarLabel'>Checkout</Link>
        </div>
        <div className = 'fruitBar'>
          <img src = '/img/Apple.png' className =' fruitBarElement' alt="Apple"/>
          <img src = '/img/Banana.png' className =' fruitBarElement' alt="Banana"/>
          <img src = '/img/Cherry.png' className =' fruitBarElement' alt="Cherry"/>
          <img src = '/img/Kiwi.png' className =' fruitBarElement' alt="Kiwi"/>
          <img src = '/img/Melon.png' className =' fruitBarElement' alt="Melon"/>
          <img src = '/img/Pineapple.png' className =' fruitBarElement' alt="Pineapple"/>
          <img src = '/img/Strawberry.png' className =' fruitBarElement' alt="Strawberry"/>
        </div>
        
        <Routes>
          <Route path = "/" element={<ProductList/>} />
          <Route path = "Checkout" element={<Checkout/>} />
          <Route path = "/Product" element={<ProductDetail/>}>
            <Route path = ":id" element = {<ProductDetail/>}></Route>
          </Route>
          <Route path= "*" element={<p>Page cannot found!!</p>} ></Route>
        </Routes>

        <div className = 'footer'>
          <p>Useful Links</p>
          About<br/>
          Contact<br/>
          Q&A
          
          <p style = {{textAlign:'right'}}>@KelvinWat</p>
        </div>
      </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
