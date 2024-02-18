import React from "react";
import './Sale.css'
import { useGetProductsQuery } from "../../store/apiSlice";
import SaleItem from "./SaleItem";

const Sale = () => {
  const query = useGetProductsQuery()
  const data = query && query.data
  const sales = data && data.filter(product => product['discont_price'])
  return (
    <section className="sale">
      <div className="container">
        <h2 className="sale__title section-title">Sale</h2>
        <ul className="sale__list list-reset">
        {sales && sales.map((product) => (
          <SaleItem key={product.id} product={product}></SaleItem>
        ))}
          {/* <li className="sale__list-item sale-item">
            <div className="sale-item__imgbox">
              <div className="sale-item__sale">-50%</div>
              <img
                className="sale-item__img"
                src="./src/images/sale-1.jpg"
              ></img>
            </div>
            <h3 className="sale-item__title">Decorative forged bridge</h3>
            <div className="sale-item__prices">
              <span className="sale-item__currentprice">$500</span>
              <span className="sale-item__oldprice">$1000</span>
            </div>
          </li>

          <li className="sale__list-item sale-item">
            <div className="sale-item__imgbox">
              <div className="sale-item__sale">-50%</div>
              <img
                className="sale-item__img"
                src="./src/images/sale-2.jpg"
              ></img>
            </div>
            <h3 className="sale-item__title">Flower basket</h3>
            <div className="sale-item__prices">
              <span className="sale-item__currentprice">$100</span>
              <span className="sale-item__oldprice">$150</span>
            </div>
          </li>

          <li className="sale__list-item sale-item">
            <div className="sale-item__imgbox">
              <div className="sale-item__sale">-50%</div>
              <img
                className="sale-item__img"
                src="./src/images/sale-3.jpg"
              ></img>
            </div>
            <h3 className="sale-item__title">Aquarium lock</h3>
            <div className="sale-item__prices">
              <span className="sale-item__currentprice">$150</span>
              <span className="sale-item__oldprice">$200</span>
            </div>
          </li>

          <li className="sale__list-item sale-item">
            <div className="sale-item__imgbox">
              <div className="sale-item__sale">-50%</div>
              <img
                className="sale-item__img"
                src="./src/images/sale-4.jpg"
              ></img>
            </div>
            <h3 className="sale-item__title">Secateurs</h3>
            <div className="sale-item__prices">
              <span className="sale-item__currentprice">$199</span>
              <span className="sale-item__oldprice">$240</span>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Sale;
