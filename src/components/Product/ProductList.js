import React, { useMemo } from 'react'
import { GetProductbyCategory } from '../../selector/GetProductbyCategory'
import { ProductCard } from './ProductCard'

export const ProductList = ({product,category}) => {
  
    const products = useMemo(() => GetProductbyCategory(product,category),[product,category])

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 mt-2'>
        {
            products.map(pro => (
                <ProductCard 
                    key = {pro.id}
                    {...pro}
                />
            ))
        }
        </div>
  )
}
