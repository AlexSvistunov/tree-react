import "./Sale.css";
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import '../ProductCard/ProductCard.css'
import { Link } from "react-router-dom";

const Sale = () => {
  const query = useGetProductsQuery();
  const data = query && query.data;
  const sales = data && data.filter((product) => product["discont_price"]);
  return (
    <section className="sale">
      <div className="container">
        <div className="sale__inner">
          <h2 className="sale__title section-title">Sale</h2>
          <Link className="sale__btn" to={'/sales'}>All sales</Link>
        </div>
        <ul className="sale__list list-reset">
          {sales &&
            sales
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} imgSrc={`../backend/public${product.image}`}></ProductCard>
              ))}
        </ul>
      </div>
    </section>
  );
};

export default Sale;
