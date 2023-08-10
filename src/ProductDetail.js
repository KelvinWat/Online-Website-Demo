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
      <Title mainTitle = {"Product Detail"} />

      { productDetail && <>
        <div className='productDetailHead'>
          <div>
            <img  className ='productImg' src = {process.env.PUBLIC_URL + '/img/' + productDetail.image}/>
          </div>
    
          <div className='productDetailInfo'>
            <p className='detailName'>{productDetail.name}</p>
            <p className='detailPrice'> ${productDetail.price}</p>
            <QuantityBtn productInfo={productDetail}/>
            <button className='buyNowButton'>Buy Now</button>
          </div>
        </div>
        <div className='productDetailDescription'>
          <p>Product description</p>
          {productDetail.description}
        </div>
      </>}
    </>
  )
}
