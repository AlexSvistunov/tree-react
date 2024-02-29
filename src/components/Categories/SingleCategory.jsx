
import { useParams } from "react-router-dom";
import HeaderBorder from "../Header/HeaderBorder";
import { useGetCategoryQuery } from "../../store/apiSlice";
import "../Sale/Sale.css";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/productsSlice";

const SingleCategory = () => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState("by default");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { title, id } = useParams();
  const a = useGetCategoryQuery(id);
  const data = a?.data?.data;

  const applyFilters = ({ priceFrom, priceTo, showDiscounted, sortBy }) => {
    let updatedProducts = [...data];

    if (priceFrom && priceTo) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= priceFrom && product.price <= priceTo
      );
    }

    if (showDiscounted) {
      updatedProducts = updatedProducts.filter(
        (product) => product["discont_price"]
      );
    }

    switch (sortBy) {
      case "newest":
        updatedProducts.sort((a, b) => b.date - a.date);
        break;
      case "price_high_low":
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      case "price_low_high":
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }

    setFilteredProducts(updatedProducts);
  };
  return (
    <>
      <HeaderBorder />
      <section className="category">
        <div className="container">
          <h1 className="category__title section-title">{title.slice(0,1).toUpperCase() + title.slice(1).toLowerCase()}</h1>

          <Sort 
            applyFilters={applyFilters}
            priceFrom={priceFrom}
            setPriceFrom={setPriceFrom}
            priceTo={priceTo}
            setPriceTo={setPriceTo}
            showDiscounted={showDiscounted}
            setShowDiscounted={setShowDiscounted}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          <ul className="product__list list-reset">
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  imgSrc={`/backend/public${product.image}`}
                />
              ))
            : data && data.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  imgSrc={`/backend/public${product.image}`}
                />
              ))}
          </ul>
        </div>
      </section>
      {/* <ProductCard key={product.id} product={product} imgSrc={`/backend/public${product.image}`}/> */}
      <Contact />
    </>
  );
};

export default SingleCategory;
