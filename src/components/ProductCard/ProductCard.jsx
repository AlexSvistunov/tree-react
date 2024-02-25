import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToCart } from "../../store/cartSlice";
import { useEffect } from "react";

const ProductCard = ({ product, imgSrc }) => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart.cartList)
  console.log(cartList);

  const addToCart = (id) => {
    dispatch(addProductToCart(id))
  }

  const price = product.price;
  const discountPrice = product["discont_price"];
  const percent = Math.ceil(((discountPrice - price) / price) * 100);
  return (
    <li className="product__list-item product-item">
      <Link className="product-link" to={`/products/${product.id}`} />
      <div className="product-item__imgbox">
        {discountPrice && (
          <div className="product-item__product">{percent}%</div>
        )}
        <img className="product-item__img" src={imgSrc} height={284}></img>
        <button className="product-item__btn-cart" onClick={() => addToCart(product.id)}>Add to cart</button>
      </div>
      <h3 className="product-item__title">{product.title}</h3>
      <div className="product-item__prices">
        <span className="product-item__currentprice">
          {discountPrice ? "$" + product["discont_price"] : product.price + "$"}
        </span>
        {discountPrice ? (
          <span className="product-item__oldprice">${product.price + ""}</span>
        ) : null}
      </div>
    </li>
  );
};

export default ProductCard;
