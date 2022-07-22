import { ProductList } from '../Product/ProductList'
import React from 'react'
export const MenScreen = ({product}) => {
    return (
    <div>
        <ProductList product={product} category="men's clothing"/>
    </div>
  )
}
