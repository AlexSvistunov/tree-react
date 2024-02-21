
import './Sale.css'
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from "../ProductCard/ProductCard";
import Sort from '../Sort/Sort'

const AllSales = () => {
  const query = useGetProductsQuery()
  const data = query && query.data
  const sales = data && data.filter(product => product['discont_price'])
  return (
    <section className="sale">
      <div className="container">
        <h1 className="sale__title section-title">Discounted items</h1>
        <Sort sale={true}/>
        <ul className="sale__list list-reset">
        {sales && sales.map((product) => (
          <ProductCard key={product.id} product={product} imgSrc={`../backend/public${product.image}`}></ProductCard>
        ))}
        </ul>
      </div>
    </section>
  );
};

export default AllSales;
