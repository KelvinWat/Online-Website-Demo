import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import {useState, useContext} from 'react'
import {CartContext} from './CartContext'

function App() {

  const[cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>
      <CartContext.Provider value = {{cartItems, setCartItems}}>
        <Link to="/">home page</Link>
        &nbsp;&nbsp;
        <Link to="/Checkout">checkout</Link> <br/>

        <img src = '/img/Apple.png'></img>
        <img src = '/img/Banana.png'></img>
        <img src = '/img/Cherry.png'></img>
        <img src = '/img/Kiwi.png'></img>
        <img src = '/img/Melon.png'></img>
        <img src = '/img/Pineapple.png'></img>
        <img src = '/img/Strawberry.png'></img>
        <Routes>
          <Route path = "/" element={<ProductList/>} />
          <Route path = "Checkout" element={<Checkout/>} />
          <Route path = "/Product" element={<ProductDetail/>}>
            <Route path = ":id" element = {<ProductDetail/>}></Route>
          </Route>
          <Route path= "*" element={<p>Page cannot found!!</p>} ></Route>
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>

  );
}

export default App;
