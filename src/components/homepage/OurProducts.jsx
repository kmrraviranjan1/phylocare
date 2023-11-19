import React from 'react'
import { productList } from '../../data/productList'
import ProductCard from '../common/ProductCard';

const OurProducts = () => {   
  return (
    <div>
        {productList.map((product)=><ProductCard key={product.id} product={product}/>)}
    </div>
  )
}

export default OurProducts


