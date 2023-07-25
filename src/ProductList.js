import React from 'react'
import styles from './ProductList.module.css'
import {useState,useEffect} from 'react' //react Hook
import { Link } from 'react-router-dom';
import Title from './Title';

export default function ProductList() {



  //need fetch api, but i do not have 
  //also need integrate it in javascript course
  let [productList, setProductList] = useState([])
  /*
  
  fetch('api link')
    .then(response => response.json)
    .then(data => setProductList(data))
  */

  useEffect(()=>{
    //
  })

  return (
    <div>

      <Title mainTitle = "Choose Your Product" subTitle = "Product Information" />
      
      <div>
        {
        ProductList.map(product=>(
          <div className ={styles.productBorder} key={product.id}>
            404.jpg <br/>
            {product.name}<br/>
            discription<br/>
            {product.price} <br/>
            <Link to = {'/product/' + product.id}>detail</Link> <br/>
          </div>
        ))

        }
      </div>
    </div>
  )
}
