import React from "react";
import { Link } from "react-router-dom";

const SaleItem = ({product}) => {
  const price = product.price
  const dicontPrice = product['discont_price']
  const percent = Math.ceil((((dicontPrice  - price) / price) * 100))
  return (
    <li className="sale__list-item sale-item">
    <Link className="item-link" to={`/products/${product.id}`}/>
      <div className="sale-item__imgbox">
        <div className="sale-item__sale">{percent}%</div>
        <img className="sale-item__img" src={`../backend/public${product.image}`} height={284}></img>
      </div>
      <h3 className="sale-item__title">Decorative forged bridge</h3>
      <div className="sale-item__prices">
        <span className="sale-item__currentprice">${product['discont_price']}</span>
        <span className="sale-item__oldprice">${product.price}</span>
      </div>
    </li>
  );
};

export default SaleItem;
