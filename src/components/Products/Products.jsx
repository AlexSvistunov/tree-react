import React from "react";
import { useGetProductsQuery } from "../../store/apiSlice";
import Product from "./Product";

const Products = () => {
  const query = useGetProductsQuery();
  const { data } = query;
  console.log(data);
  return (
    <section className="products">
      <div className="container">
        <h1>All products</h1>
        <div
          className="category__sort"
          style={{ marginBottom: "40px", display: "flex", gap: "40px" }}
        >
          <label style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span>Price</span>
            <input placeholder="from" type="number"></input>
            <input placeholder="to" type="number"></input>
          </label>

          <label style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span>Discounted items</span>
            <input type="checkbox"></input>
          </label>

          <label style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <span>Sorted</span>
            <select>
              <option>by default</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
        </div>

        <ul className="categories__list list-reset">
          {data &&
            data.map((product) => <Product key={product.id} product={product}></Product>)}
        </ul>
      </div>
    </section>
  );
};

export default Products;
