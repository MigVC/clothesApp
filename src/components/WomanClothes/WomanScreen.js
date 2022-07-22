import { ProductList } from '../Product/ProductList'
import React from 'react'

export const WomanScreen = ({product}) => {
  return (
    <div>
        <ProductList product={product} category="women's clothing"/>
    </div>
  )
}
