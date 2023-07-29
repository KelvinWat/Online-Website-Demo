import React, { useContext } from 'react'
import Title from './Title';
import {Link} from 'react-router-dom';
import QuantityBtn from './QuantityBtn';
import { CartContext } from './CartContext';

export default function Checkout() {

  // let cartItem = {
  //   "cartItems":[
  //     {
  //       "id": 2,
  //       "name": "Banana",
  //       "image": "Banana.png",
  //       "price": 0.49,
  //       "quantity": 3
  //     },
  //     {
  //       "id": 4,
  //       "name": "Mango",
  //       "image": "Mango.png",
  //       "price": 1.99,
  //       "quantity": 5
  //     }
  //   ]
  // }

  let {cartItems} = useContext(CartContext)
  let cartEmpty = cartItems.length <= 0 ? true : false
  let grandTotal = cartItems.reduce((total,product)=>{
    return total += product.price * product.quantity
  },0)
  const discountPrice = 39

  return (
    <div>
      <Title mainTitle = "Your Shopping Cart"/>
      
      <div>
        {
          !cartEmpty && <div id = "cartSection">
          {/*list*/
            cartItems.map(product => (
              <div key={product.id}>
                <img src = {process.env.PUBLIC_URL + '/img/' + product.image}></img><br/>
                {product.name}<br/>
                Quantity: {product.quantity}<br/>
                Total price: {product.quantity * product.price}
                <br/>
                <QuantityBtn productInfo= {product}/><br/>
              </div>
            ))
          }
          </div>
        }
        {
          cartEmpty && <div id = "cartSection">
          Shopping Cart is Empty<br/><br/>
          <Link to = "/">Back to Homepage</Link>
          </div>
        }
        <div id = "checkoutSection">
          <div><br/><br/>
            
            {/*discount when $39 */
              grandTotal >= discountPrice ?
              <div>Total Price : ${grandTotal - 15}</div> :
              <div>Total Price : ${grandTotal} <br/>
                  買滿${discountPrice}優惠 $15</div> 
            }
          </div>
        </div>
      </div>
    </div>
  )
}
