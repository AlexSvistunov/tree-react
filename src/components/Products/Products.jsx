import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import Sort from "../Sort/Sort";
import "./Products.css";
import { useEffect, useState } from "react";
import { filterByPriceRange, getProducts } from "../../store/productsSlice";
import { filterByDiscounted } from "../../store/productsSlice";


const Products = () => {
  const [priceFrom, setPriceFrom] = useState('')
  const [priceTo, setPriceTo] = useState('')
  const [showDiscounted, setShowDiscounted] = useState(false)
  const [sortBy, setSortBy] = useState('by default');

  const applyFilters = ({ priceFrom, priceTo, showDiscounted, sortBy }) => {
    // Реализация фильтрации
    // Применение фильтров к продуктам
  };

  const handleApplyFilters = () => {
    applyFilters({ priceFrom, priceTo, showDiscounted, sortBy });
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);


  const productsList = useSelector((state) => state.products.productsList);
  const filteredArray = [];


  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title section-title">All products</h1>
        <Sort
         handleApplyFilters={handleApplyFilters}
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
