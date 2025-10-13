import React from 'react'
import ProductCard from './ProductCard'

export const Products = () => {
     let products = [
          {
               name:"MacBook",
               price:89000,
               category:"Electronic"
          },
          {
               name:"Olive Oil",
               price:1200,
               category:"Grocery"
          },
          {
               name:"Bucket",
               price:700,
          },
     ]
  return (
    <div
    style={{ width:"100%", display:"flex", gap:"9px",  background:"gray", padding:"12px 27px"}}
    >
     {
          products.map((data,index)=>(
               <ProductCard key={index} name={data.name} price={data.price} category={data.category} />
          ))
     }
    </div>
  )
}
