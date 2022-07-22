import React,{useMemo, useState} from 'react'
import { useParams } from "react-router-dom"
import { GetProductById } from '../../selector/GetProductById'


export const ProductScreen = ({product}) => {
  const [contador, setContador] = useState(0)
  const {id} = useParams()
  const prod = useMemo(() => GetProductById(product,id),[product,id])
  console.log(prod)
  const {
    title,
    price,
    description,
    image,
    rating

  } = prod
  
  
  return (
    <div className='row mt-3'>
      <div className='pictures col-sm-12 col-md-4 animate__animated animate__fadeInLeft'>
        <img 
          src={image}
          alt={title}
          className="img-thumbnail icon2"
        />
      </div>

      <div className='col-sm-12 col-md-8 animate__animated animate__fadeIn'>
        <div className='mx-3'>
          <h3> {title} </h3>
        </div>
        
        <ul className='list-group mx-2'>
          <li className='list-group-item'>{description}</li>
          <li className='list-group-item'><b>Price: </b>$ {price}</li>
          <li className='list-group-item'><b>Rate: </b>{rating.rate}</li>
        </ul>
        <div className='row mt-3 '>
          <div className='col-sm-12 col-md-4 option'>
            <button className='btn btn-outline-dark' onClick={() => {
                if(contador<=0) setContador(0)
                else setContador(contador-1)}
              } 
            >
              -
            </button>

            <span className='mx-3'>{contador}</span>

            <button className='btn btn-dark' onClick={() => setContador(contador+1)}>
              +
            </button>
          </div>
          <div className='col-sm-12 col-md-8 option py-2'>
            <button className='btn btn-success'>
              Agregar al carrito
            </button>
          </div>
        </div>
        
      </div>
      
    </div>

    
  )
}
