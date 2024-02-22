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
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [discounted, setDiscounted] = useState(false);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterByDiscounted());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterByPrice());
  }, [dispatch]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(filterByDiscounted());
  };

  const fromPriceChange = (value) => {
    setFromPrice(value)
  }

  const toPriceChange = (value) => {
    setToPrice(value)
  }



  const productsList = useSelector((state) => state.products.productsList);
  const filtered = useSelector((state) => state.products.filtered);

  const filteredProducts = productsList.filter(product => {
    return (!discounted || product.discount_price) &&
           (!fromPrice || product.price >= parseInt(fromPrice)) &&
           (!toPrice || product.price <= parseInt(toPrice));
  });

  filteredProducts.sort((a, b) => a.price - b.price);


  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title section-title">All products</h1>
        <Sort
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleCheckboxChange={handleCheckboxChange}
          fromPriceChange={fromPriceChange}
          toPriceChange={toPriceChange}
          fromPrice={fromPrice}
          toPrice={toPrice}
        />
        <ul className="product__list list-reset">
          {fromPrice || toPrice
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
  );
};

export default Products;
