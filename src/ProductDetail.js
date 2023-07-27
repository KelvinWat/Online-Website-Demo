import React from 'react'
import { useParams , Link} from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductDetail() {

  let params = useParams()

  return (
    <div>
      <Title mainTitle = {"Product Detail #" +  params.id}/>

        <QuantityBtn/>
       <br/><br/>

      <Link to = "/">Back To Home Page </Link>
    </div>
  )
}
