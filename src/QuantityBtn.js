import React from 'react'
import {useState, useContext} from 'react'
import { CartContext } from './CartContext'

export default function QuantityBtn({productInfo}) {

    const {cartItems,setCartItems} =  useContext(CartContext)

    // find if the product already in cart
    // if have will return the index in the array: 0,1,2.. if not return -1
    let productIndexInCart = cartItems.findIndex((element)=>{
        return element.id === productInfo.id
    })

    let [numInCart,setNumInCart] = useState(
        (productIndexInCart === -1 )? 0 : 
        cartItems[productIndexInCart].quantity
        )

    const handleAdd = () => {
        
        //add new product in cart
        if(productIndexInCart === -1){
            setCartItems([{
                id: productInfo.id,
                name: productInfo.name,
                image:productInfo.image,
                price:productInfo.price,
                quantity:1
            },
            ...cartItems]
            )
        } else { // add the quantity ++      
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity++
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart+1)
    }

    const handleSubtract = () => {
        //remove product in cart
        if(cartItems[productIndexInCart].quantity === 1){
            let newCartArray = [...cartItems]
            newCartArray.splice(productIndexInCart,1)
            setCartItems(newCartArray)   
        } else {  
            let newCartArray = [...cartItems]
            newCartArray[productIndexInCart].quantity--
            setCartItems(newCartArray)
        }

        setNumInCart(numInCart-1)
    }

  return (
    <div >
        {
        (numInCart === 0) ?
        <div onClick ={handleAdd} style = {{
            display:'grid',
            backgroundColor: '#2f3542',
            color:'#f1f2f6',
            borderRadius:'40px',
            alignItems:'center',
            height:'30px',
            textAlign: 'center',
            cursor:'pointer'
        }}>
           Add {productInfo.name} To Shopping Cart
        </div> :
        <div className='addToCartBtn'>
            <div onClick ={handleSubtract} className ='subBtn'>-</div>

            <div style = {{

                height:'30px'
            }}>Number: {numInCart}</div>
            
            <div onClick ={handleAdd} className ='addBtn'>+</div>
        </div>
        }
    </div>
  )
}
