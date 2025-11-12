import React from 'react'
import Product from '../images/Product.json'
import Style from '../card/Style.css'
const Card = (img,name) => {
  return (
    <div>
          <div className="main-container">
      <div className="card-container">
        {Product.map((Product) => (
          <ProductCard
            key={Product.id}
            name={Product.name}
            image={Product.image}
          />
        ))}
      </div>
    </div>
    </div>
  )
}

export default Card
