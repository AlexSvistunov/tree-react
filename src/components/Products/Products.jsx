import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
import "./Products.css";
import { useEffect, useState } from "react";
import { getProducts } from "../../store/productsSlice";
import { filterByDiscounted } from "../../store/productsSlice";

const Products = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterByDiscounted());
  }, [dispatch]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(filterByDiscounted());
  };

  const productsList = useSelector((state) => state.products.productsList);
  const filtered = useSelector((state) => state.products.filtered);


  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title section-title">All products</h1>
        <Sort
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handleCheckboxChange={handleCheckboxChange}
        />
        <ul className="product__list list-reset">
          {isChecked
            ? filtered.map((product) => (
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
