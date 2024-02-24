import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
import "./Products.css";
import { useEffect, useState } from "react";
import { filterByPriceRange, getProducts } from "../../store/productsSlice";
import { filterByDiscounted } from "../../store/productsSlice";

//мб сделать просто не мультифильтрацию

const Products = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(1000);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if(!isChecked) {
      dispatch(filterByDiscounted());
    } else {
      dispatch(getProducts())
    }

  };

  const productsList = useSelector((state) => state.products.productsList);

  const handlePriceRangeChange = () => {
    dispatch(filterByPriceRange({priceFrom, priceTo}));
  };

  useEffect(() => {
    handlePriceRangeChange()
  }, [priceTo, priceFrom])

  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title section-title">All products</h1>
        <Sort
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          setPriceFrom={setPriceFrom}
          priceFrom={priceFrom}
          setPriceTo={setPriceTo}
          priceTo={priceTo}
          handlePriceRangeChange={handlePriceRangeChange}
        />
        <ul className="product__list list-reset">
          {productsList &&
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
