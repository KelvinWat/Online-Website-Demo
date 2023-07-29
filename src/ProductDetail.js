import React, { useState, useEffect, useContext } from 'react'
import { useParams , Link} from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductDetail() {

  let params = useParams()

  let [productDetail,setProductDetail] = useState(null)

  useEffect(()=>{
    
    fetch(process.env.PUBLIC_URL + '/products.json' )
    .then(response => response.json())
    .then(data =>  {
      let productInfo = data.find((element)=>{
        return element.id === parseInt(params.id)
      })
      setProductDetail (productInfo)
    })
    console.log(productDetail)
   },[])


  return (
    <>
      {
        productDetail && 
        <div>
        <Title mainTitle = {"Product Detail #" +  params.id}/>
        {productDetail.name} <br/>
        Price: {productDetail.price} <br/>
        <QuantityBtn productInfo={productDetail}/>
        <br/><br/>
        </div>
      }

      <Link to = "/">Back To Home Page </Link>
    </>
  )
}
