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
    <>
      <Title mainTitle = "Your Shopping Cart"/>
      
      <div>
        {
          !cartEmpty && <div id = "cartSection">
            <div className='cartTableBar'>
              <div className='cartProdText'>Product</div>
              <div className='cartQtnText'>Quantity</div>
              <div className='cartPriceText'>Price</div>
            </div>
            {/*list*/
              cartItems.map(product => (
                <div className='cartContent' key={product.id}>
                  <img src = {process.env.PUBLIC_URL + '/img/' + product.image} className = 'cartContentImg' />
                  <Link to = {'/product/' + product.id} className='cartContentName' >{product.name}</Link>
                  <QuantityBtn productInfo= {product}/>
                  <div className='cartContentPrice'>${product.quantity * product.price/100}</div>
                  
                </div>
              ))
            }
          </div>
        }
        
        {
          cartEmpty && <div id = "cartSection"  className='cartEmptyText'>
          Shopping Cart is Empty<br/><br/>
          <Link to = "/" className='cartToHomeLink'>Back to Homepage</Link>
          </div>
        }

        {!cartEmpty && <div id = "checkoutSection">
          <div className='checkoutSect'>
            
            {/*discount when $39 */
              grandTotal >= discountPrice ?
              <div>Total Price : ${grandTotal /100}<br/>
              After discount:${grandTotal/100} - 15 = ${(grandTotal - 1500) /100}</div> :
              <div>Total Price : ${grandTotal/100} <br/>
                  Get $15 Discount when buy ${discountPrice} </div> 
            }
            <button className='payButton'>Pay Now</button>
          </div>
        </div>}
      </div>
    </>
  )
}
