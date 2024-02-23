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
  const [prices, setPrices] = useState({ priceFrom: '', priceTo: ''});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    dispatch(filterByDiscounted());
  };

  console.log(prices);
  const handlePrices = (state, value) => {
    if(value === '') return

    if (state === "from") {
      const upDatedValue = { priceFrom: value };
      const obj = {...prices, ...upDatedValue}
      setPrices((prev) => ({
        ...prev,
        ...upDatedValue,
      }));
      dispatch(filterByPrice(obj))

    }

    if (state === "to") {
      const upDatedValue = { priceTo: value };
      const obj = {...prices, ...upDatedValue}
      setPrices((prev) => ({
        ...prev,
        ...upDatedValue,
      }));
      dispatch(filterByPrice(obj))

    }


  };

  const productsList = useSelector((state) => state.products.productsList);
  const filteredList = useSelector((state) => state.products.filtered);
  console.log(filteredList);

  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title section-title">All products</h1>
        <Sort
          handleCheckboxChange={handleCheckboxChange}
          isChecked={isChecked}
          prices={prices}
          handlePrices={handlePrices}
        />
        <ul className="product__list list-reset">
          {prices.priceFrom && prices.priceTo
            ? filteredList.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  imgSrc={`../backend/public${product.image}`}
                />
              ))
            : productsList &&
              productsList.map((product) => (
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

// initialState: {
//   productsList: [],
//   filtered: [],  
//     priceTo: ,
//    priceFrom: ,


// },

export default Products;
