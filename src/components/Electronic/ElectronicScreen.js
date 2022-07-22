import React from 'react'
import { ProductList } from '../Product/ProductList'

export const ElectronicScreen = ({product}) => {

  return (
    <ProductList product={product} category="electronics"/>
  )
}
