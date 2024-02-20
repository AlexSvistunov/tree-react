import { Link } from "react-router-dom"

const ProductCard = ({product, imgSrc}) => {
  const price = product.price
  const dicontPrice = product['discont_price']
  console.log(product);
  const percent = Math.ceil((((dicontPrice  - price) / price) * 100))
  return (
    <li className="product__list-item product-item">
    <Link className="product-link" to={`/products/${product.id}`}/>
      <div className="product-item__imgbox">
        {dicontPrice && <div className="product-item__product">{percent}%</div>}
        <img className="product-item__img" src={imgSrc} height={284}></img>
        <button className="product-item__btn-cart">Add to cart</button>
      </div>
      <h3 className="product-item__title">{product.title}</h3>
      <div className="product-item__prices">
        <span className="product-item__currentprice">{dicontPrice ? '$' + product['discont_price'] : product.price + '$'}</span>
        {dicontPrice ? <span className="product-item__oldprice">${product.price + ''}</span> : null}
      </div>
    </li>
  );
}

export default ProductCard