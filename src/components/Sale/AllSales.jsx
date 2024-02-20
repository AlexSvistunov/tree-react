
import './Sale.css'
import { useGetProductsQuery } from "../../store/apiSlice";
import SaleItem from "./SaleItem";

const AllSales = () => {
  const query = useGetProductsQuery()
  const data = query && query.data
  const sales = data && data.filter(product => product['discont_price'])
  return (
    <section className="sale">
      <div className="container">
        <h2 className="sale__title section-title">Sale</h2>
        <ul className="sale__list list-reset">
        {sales && sales.map((product) => (
          <SaleItem key={product.id} product={product}></SaleItem>
        ))}
        </ul>
      </div>
    </section>
  );
};

export default AllSales;
