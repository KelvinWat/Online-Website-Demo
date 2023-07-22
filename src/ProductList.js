import React from 'react'
import styles from './ProductList.module.css'

export default function ProductList() {

  //to-do  add name, price,image ....
  let ProductList = [
    {"id" : 1, "price" : 99},
    {"id" : 2, "price" : 33},
    {"id" : 3, "price" : 44},
    {"id" : 4, "price" : 66}
  ]
  

  return (
    <div>
      <h1 style = {{backgroundColor: 'orange',borderBottom: '5px solid red'}}>Choose Your Product</h1>
      <h2>Product Information</h2>
      <img src = {process.env.PUBLIC_URL + '/img/Tree.png'}/>
      <div>
        {
        ProductList.map(product=>(
        <div className ={styles.productBorder} key={product.id}>
          image.jpg (sample)<br/>
          name<br/>
          discription<br/>
          {product.price}
        </div>
        ))
        }</div>
    </div>
  )
}
