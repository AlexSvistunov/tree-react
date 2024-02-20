
import { useGetProductsQuery } from "../../store/apiSlice";
import ProductCard from '../ProductCard/ProductCard'
import Sort from '../Sort/Sort'

const Products = () => {
  const query = useGetProductsQuery();
  const { data } = query;
  return (
    <section className="products">
      <div className="container">
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
