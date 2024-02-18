import React from "react";

const SaleItem = ({product}) => {
  const price = product.price
  const dicontPrice = product['discont_price']
  const percent = Math.ceil((((dicontPrice  - price) / price) * 100))
  console.log(percent);
  return (
    <li className="sale__list-item sale-item">
      <div className="sale-item__imgbox">
        <div className="sale-item__sale">{percent}%</div>
        <img className="sale-item__img" src={`../backend/public${product.image}`}></img>
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
