import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
import "./Products.css";
import { useEffect, useState } from "react";
import { filterByPriceRange, getProducts } from "../../store/productsSlice";
import { filterByDiscounted } from "../../store/productsSlice";
import Contact from "../Contact/Contact";

const Products = () => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [showDiscounted, setShowDiscounted] = useState(false);
  const [sortBy, setSortBy] = useState("by default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productsList = useSelector((state) => state.products.productsList);

  const applyFilters = ({ priceFrom, priceTo, showDiscounted, sortBy }) => {
    let updatedProducts = [...productsList];

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
      <section className="products">
        <div className="container">
          <h1 className="products__title section-title">All products</h1>
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
                    imgSrc={`../backend/public${product.image}`}
                  />
                ))
              : productsList.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    imgSrc={`../backend/public${product.image}`}
                  />
                ))}
          </ul>
        </div>
      </section>

      <Contact />
    </>
  );
};

export default Products;
