import React from "react";
import { useParams } from "react-router-dom";
import HeaderBorder from "../Header/HeaderBorder";

const SingleCategory = () => {
  const { title } = useParams();
  return (
    <section className="category">
      <HeaderBorder />
      <div className="container">
        <h1>{title}</h1>
        <div className="category__sort">
          <label>
            <span>price</span>
            <input placeholder="from" type="number"></input>
            <input placeholder="to" type="number"></input>
          </label>

          <label>
            <span>Discounted items</span>
            <input type="checkbox"></input>
          </label>

          <label>
            <span>Sorted</span>
            <select>
              <option>by default</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;
