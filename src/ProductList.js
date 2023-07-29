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
    }) // can set the data to only the data we need, eg not including description / less description, only name / title of the product
    .catch(error => console.log(`Error: ${error}`))
     
   },[])

  

  return (
    <>

      <Title mainTitle = "Choose Your Product" subTitle = "Product Information" />
      
      <div>
        {
        productList.map(product=>(
          <div className ={styles.productBorder} key={product.id}>
            {product.name}<br/>
            {product.price} <br/>
            <Link to = {'/product/' + product.id}>Detail</Link> <br/><QuantityBtn productInfo={product}/>
          </div>
        ))

        }
      </div>
    </>
  )
}
