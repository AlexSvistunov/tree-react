
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from '../ProductCard/ProductCard'
import Sort from '../Sort/Sort'
import './Products.css'

const Products = () => {
  const query = useGetProductsQuery();
  const { data } = query;
  return (
    <section className="products">
      <div className="container">
        <h1 className="products__title section-title">All products</h1>
        <Sort/>
        <ul className="product__list list-reset">
          {data &&
            data.map((product) => <ProductCard key={product.id} product={product} imgSrc={`../backend/public${product.image}`}/>)}
        </ul>
      </div>
    </section>
  );
};

export default Products;
