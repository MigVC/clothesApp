import React from 'react'
import {Link} from "react-router-dom"

export const ProductCard = (
{
    id,
    title,
    price,
    description,
    category,
    image,
    rating
}

) => {
  return (
    <div className='animate__animated animate__fadeIn'>
    <div className='card'>
        <div className='row'>
            <div className='col-6'>
                <img src={image} alt={title} className="card-img"/>
            </div>
            <div className='col-6'>   
                <div className='card-body'>
                    <h5 className='card-title'> {title} </h5>
                    <p className='card-text'><b>Precio: </b>$ {price}</p>
                </div>  
                <Link to={`/product/${id}`} className="link-info">
                    Ver mas...
                </Link>
            </div>
            
        </div>
    </div>
        
        
    </div>

    
  )
}
