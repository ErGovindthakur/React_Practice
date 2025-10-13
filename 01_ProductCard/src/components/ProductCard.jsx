import React from 'react'

const ProductCard = ({name,price,category="General"}) => {
  return (
    <div style={{
     width:"160px",
     borderRadius:"18px",
     padding:"12px 27px",
     background:"wheat",

    }}>
    <section>
    <p>{name}</p>
    <p>{price}</p>
    <p>{category}</p>
    </section>
    </div>
  )
}

export default ProductCard