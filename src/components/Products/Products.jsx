import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
import "./Products.css";
import { useEffect, useState } from "react";
import { filterByPrice, getProducts } from "../../store/productsSlice";
import { filterByDiscounted } from "../../store/productsSlice";

const Products = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [priceFrom, setPriceFrom] = useState(null)
  const [prices, setPrices] = useState({priceFrom: null, priceTo: null})

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(filterByDiscounted());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(filterByPrice());
  // }, [dispatch]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(filterByDiscounted());
  };

  const handlePriceFrom = (value) => {
    const numberValue = Number(value)
    setPriceFrom(numberValue)
    dispatch(filterByPrice(numberValue))
  }


  const productsList = useSelector((state) => state.products.productsList);
  const filteredList = useSelector((state) => state.products.filtered);

  console.log(productsList);

  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title section-title">All products</h1>
        <Sort
          handleCheckboxChange={handleCheckboxChange}
          isChecked={isChecked}
          priceFrom={priceFrom}
          handlePriceFrom={handlePriceFrom}

        />
        <ul className="product__list list-reset">

          {filteredList.length
            ? filteredList.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  imgSrc={`../backend/public${product.image}`}
                />
              ))
            : productsList && productsList.map((product) => (
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

export default Products;
