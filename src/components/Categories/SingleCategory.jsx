import React from "react";
import { useParams } from "react-router-dom";
import HeaderBorder from "../Header/HeaderBorder";
import { useGetCategoryQuery } from "../../store/apiSlice";
import "../Sale/Sale.css";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
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

          <Sort/>

          <ul className="product__list list-reset">
            {data &&
              data.map((product) => (
                  <ProductCard key={product.id} product={product} imgSrc={`/backend/public${product.image}`}/>
              ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default SingleCategory;
