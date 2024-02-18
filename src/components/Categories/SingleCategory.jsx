import React from "react";
import { useParams } from "react-router-dom";
import HeaderBorder from "../Header/HeaderBorder";
import { useGetCategoryQuery } from "../../store/apiSlice";
import "../Sale/Sale.css";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
const SingleCategory = () => {
  const { title, id } = useParams();
  const a = useGetCategoryQuery(id);
  const data = a?.data?.data;
  console.log(data);
  return (
    <>
      <HeaderBorder />
      <section className="category">
        <div className="container">
          <h1>{title.toUpperCase()}</h1>
          <div
            className="category__sort"
            style={{ marginBottom: "40px", display: "flex", gap: "40px" }}
          >
            <label
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              <span>Price</span>
              <input placeholder="from" type="number"></input>
              <input placeholder="to" type="number"></input>
            </label>

            <label
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              <span>Discounted items</span>
              <input type="checkbox"></input>
            </label>

            <label
              style={{ display: "flex", gap: "16px", alignItems: "center" }}
            >
              <span>Sorted</span>
              <select>
                <option>by default</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </label>
          </div>

          <ul className="sale__list list-reset">
            {data &&
              data.map((categoryEl) => (
                  <li key={categoryEl.id} className="sale__list-item sale-item">
                    <div className="sale-item__imgbox">
                      <div className="sale-item__sale">-50%</div>
                      <Link className="item-link" to={`/products/${id}`}></Link>
                      <img
                        className="sale-item__img"
                        src={`/backend/public/${categoryEl.image}`}
                      ></img>
                    </div>
                    <h3 className="sale-item__title">
                      Decorative forged bridge
                    </h3>
                    <div className="sale-item__prices">
                      <span className="sale-item__currentprice">$500</span>
                      <span className="sale-item__oldprice">$1000</span>
                    </div>
                  </li>
              ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default SingleCategory;
