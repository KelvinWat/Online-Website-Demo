import React from 'react'
import {useState} from 'react'

export default function QuantityBtn() {

    let [numInCart,setNumInCart] = useState(0)

    const handleAdd = () => {
        setNumInCart(numInCart+1)
    }
    const handleSubtract = () => {
        setNumInCart(numInCart-1)
    }

  return (
    <div>
        {
        (numInCart === 0) ?
        <div onClick ={handleAdd}>Add To Shopping Cart</div> :
        <div>
            <span onClick ={handleSubtract}>-</span>
            number: {numInCart}
            <span onClick ={handleAdd}>+</span>
        </div>
        }
    </div>
  )
}
