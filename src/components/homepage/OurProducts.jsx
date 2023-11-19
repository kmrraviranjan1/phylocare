import React from 'react'
import { productList } from '../../data/productList'
import ProductCard from '../common/ProductCard';

const OurProducts = () => {   
  return (
    <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
        {productList.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
  )
}

export default OurProducts


