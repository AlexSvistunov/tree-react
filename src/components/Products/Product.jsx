import React from 'react'

const Product = ({product}) => {
  console.log(product);
  return (
    <li className="categories__item">
      <img
        className="categories__item-img"
        src={`./backend/public/${product.image}`}
      ></img>
      <h3 className="categories__item-name">{product.title}</h3>
  </li>
  )
}

export default Product