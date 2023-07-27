import React from 'react'
import styles from './ProductList.module.css'
import {useState,useEffect} from 'react' //react Hook
import { Link } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductList() {


   let [productList, setProductList] = useState([])

 useEffect(()=>{
    
    fetch(process.env.PUBLIC_URL + '/products.json')
    .then(response => response.json())
    .then(data =>  {
      setProductList(data);
    })
    .catch(error => console.log(`Error: ${error}`));

    
    console.log(productList)
     
   },[])

  

  return (
    <div>

      <Title mainTitle = "Choose Your Product" subTitle = "Product Information" />
      
      <div>
        {
        productList.map(product=>(
          <div className ={styles.productBorder} key={product.id}>
            {product.name}<br/>
            {product.price} <br/>
            <Link to = {'/product/' + product.id}>Detail</Link> <br/><QuantityBtn/>
          </div>
        ))

        }
      </div>
    </div>
  )
}
