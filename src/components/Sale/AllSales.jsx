import "./Sale.css";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
import { useState } from "react";

const AllSales = () => {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [sortBy, setSortBy] = useState("by default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const query = useGetProductsQuery();
  const data = query && query.data;
  const sales = data && data.filter((product) => product["discont_price"]);

  const applyFilters = ({ priceFrom, priceTo, showDiscounted, sortBy }) => {
    let updatedProducts = [...sales];

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
    <section className="sale">
      <div className="container">
        <h1 className="sale__title section-title sale__title-discounted">
          Discounted items
        </h1>
        <Sort sale={true}
          applyFilters={applyFilters}
          priceFrom={priceFrom}
          setPriceFrom={setPriceFrom}
          priceTo={priceTo}
          setPriceTo={setPriceTo}
          sortBy={sortBy}
          setSortBy={setSortBy}
         />
        <ul className="sale__list list-reset">
          {filteredProducts.length > 0
            ? filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  imgSrc={`../backend/public${product.image}`}
                />
              ))
            : sales && sales.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  imgSrc={`../backend/public${product.image}`}
                />
              ))}
        </ul>
      </div>
    </section>
  );
};

export default AllSales;
