import React from 'react'
import { ProductList } from '../Product/ProductList'

export const JeweleryScreen = ({product}) => {

  return (
    <div>
        <ProductList product={product} category="jewelery"/>
    </div>
  )
}
