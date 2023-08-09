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

      <Title mainTitle = "Choose Your Product"/>
      
      <div className ={styles.productListGrid}>
        {
        productList.map(product=>(
            <div className ={styles.productBorder} key={product.id}>
              <Link to = {'/product/' + product.id} style={{ textDecoration: 'none' }}>
                <span>
                  <>
                    <img  className = {styles.productImage} src = {process.env.PUBLIC_URL + '/img/' + product.image}/>
                  </>

                  <div className = {styles.productInfo}>
                    <div className = {styles.productName}>{product.name}</div>
                    <div className = {styles.productPrice}>${product.price}</div>
                  </div>
 
                </span> 

              </Link>
              <QuantityBtn productInfo={product}/>
              
            </div>
            

          
          
        ))

        }
      </div>
    </>
  )
}
