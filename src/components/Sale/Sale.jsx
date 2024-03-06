import "./Sale.css";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import '../ProductCard/ProductCard.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../store/productsSlice";
import ROUTES from "../../utils/routes";
import useFetchProducts from "../../hooks/useFetchProducts";

const Sale = () => {
  const dispatch = useDispatch()
  const allProducts = useFetchProducts()
  const query = useGetProductsQuery();
  const data = query && query.data;
  const sales = data && data.filter((product) => product["discont_price"]);
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__inner">
          <div className="wrapper-line sale-wrapper__line">
            <h2 className="sale__title section-title">Sale</h2>
            <div className="line"></div>
          </div>

          <Link className="sale__btn" to={ROUTES.ALLSALES}>All sales</Link>
        </div>
        <ul className="sale__list list-reset">
          {sales &&
            sales
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} imgSrc={`/backend/public${product.image}`}></ProductCard>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default Sale;
