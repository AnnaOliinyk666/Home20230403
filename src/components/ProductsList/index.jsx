import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../Product'

export default function ProductsList() {
    const products = useSelector(state => state.products)
    
  return (
    <div>
        <h2>Products</h2>
        <div>
        {
            products.map((prod)=> <Product id={prod.id} title={prod.title} price={prod.price} discount = {prod.discount}/>)
        }
        </div>
        
    </div>
  )
}
