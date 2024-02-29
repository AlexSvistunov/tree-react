import { useSelector } from "react-redux";
import HeaderBorder from "../Header/HeaderBorder";
import "../Products/SingleProduct.css";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../store/productsSlice";
import { deleteProductFromCart } from "../../store/cartSlice";
import { plusProduct } from "../../store/cartSlice";
import { minusProduct } from "../../store/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const allProducts = useSelector((state) => state.products.productsList);
  const cartList = useSelector((state) => state.cart.cartList);
  useEffect(() => {
    updatePrice();
  }, [cartList]);
  console.log(cartList);

  let [totalAmount, setTotalAmount] = useState(0);
  let [cartListAmount, setCartListAmount] = useState(
    cartList.map((cartListElement) => cartListElement["amount"])
  );
  console.log(cartListAmount);
  console.log(totalAmount);

  const plusCartAmount = (index) => {
    const updatedCartListAmount = [...cartListAmount];
    updatedCartListAmount[index] += 1;
    setCartListAmount(updatedCartListAmount);
    dispatch(plusProduct(index));
  };

  const minusCartAmount = (index) => {
    if (cartListAmount[index] > 1) {
      const updatedCartListAmount = [...cartListAmount];
      updatedCartListAmount[index] -= 1;
      setCartListAmount(updatedCartListAmount);
      dispatch(minusProduct(index));
    }
  };

  // СДЕЛАТЬ ЧТОБЫ МОЖНО БЫЛО ПЕРЕЙТИ ПО КАРТОЧКЕ ТОВАРА НАЖАВ НА В КОРЗИНЕ НА LINK

  const updatePrice = () => {
    let totalPrice = 0;
    cartList.forEach((cartItem) => {
      const item =
        allProducts &&
        allProducts.find((product) => product.id === cartItem.id);
      const amount = cartItem.amount;
      console.log(amount);
      console.log(cartItem);
      totalPrice += (item['discont_price'] ? item['discont_price'] : item.price) * amount;
      if (cartItem.amount <= 0) {
        deleteItemFromCart(cartItem.id);
      }
    });
    setTotalAmount(totalPrice);
  };

  const deleteItemFromCart = (productId) => {
    dispatch(deleteProductFromCart(productId));
  };

  return (
    <>
      <HeaderBorder />
      <section className="cart">
        <div className="container">
          <div className="cart__inner">
            <div className="wrapper-line cart-wrapper__line">
              <h1 className="cart__title section-title">Shopping cart</h1>
              <div className="line"></div>
            </div>
            <Link className="cart__btn" to={"/"}>
              Back to the store
            </Link>
          </div>

          {!cartList.length ? (
            <div className="cart__wrapper" style={{ flexDirection: "column" }}>
              <span className="cart__wrapper-no-items">
                Looks like you have no items in your basket currently.
              </span>
              <Link className="cart__wrapper-continue" to={"/products"}>
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="cart__wrapper">
              <ul className="cart__list list-reset">
                {cartList.length &&
                  allProducts &&
                  cartList.map((cartItem, index) => {
                    const product = allProducts.find(
                      (product) => product.id === cartItem.id
                    );

                    if (allProducts) {
                      return (
                        <li className="cart-item" key={product.id}>
                          <img
                            style={{ width: "200px", height: "100%" }}
                            className="cart-item__img"
                            src={`/backend/public${product.image}`}
                          ></img>
                          <div className="cart-item__info">
                            <Link to={`/products/${product.id}`}>
                              <h3 className="cart-item__title">
                                {product.title}
                              </h3>
                            </Link>

                            <div className="cart-item__bottom">
                              <div className="product-about__inner">
                                <button
                                  className="product-about__plus"
                                  onClick={() => {
                                    plusCartAmount(index);
                                  }}
                                >
                                  +
                                </button>
                                <div className="product-about__number">
                                  {cartListAmount[index]}
                                </div>
                                <button
                                  className="product-about__minus"
                                  onClick={() => {
                                    minusCartAmount(index);
                                  }}
                                >
                                  -
                                </button>
                              </div>

                              <div className="cart-item__prices">
                                <div className="cart-item__currentprice">
                                {product.discont_price ? "$" + product["discont_price"] : product.price + "$"}
                                </div>
                                {product["discont_price"] && (
                                  <span className="product-about__oldprice cart-about__oldprice">
                                    {product["discont_price"] ? "$" + product.price : null}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <button
                            className="cart-item__delete-btn"
                            onClick={() => deleteItemFromCart(index)}
                          ></button>
                        </li>
                      );
                    }
                  })}
              </ul>

              <div className="cart-details">
                <h3 className="cart-details__title">Order details</h3>
                <span className="cart-details__items">
                  {cartList.length
                    ? cartList.length +
                      " item" +
                      (cartList.length !== 1 ? "s" : "")
                    : "0 items"}
                </span>
                <div className="cart-details__total">
                  <span className="cart-details__total-head">Total</span>
                  <span className="cart-details__total-sum">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <form className="cart-order">
                  <div className="cart-order__inputs">
                    <input
                      className="cart-order__input"
                      placeholder="Name"
                      type="text"
                    ></input>
                    <input
                      className="cart-order__input"
                      placeholder="Phone number"
                      type="tel"
                    ></input>
                    <input
                      className="cart-order__input"
                      placeholder="Email"
                      type="email"
                    ></input>
                  </div>
                  <button className="cart-order__btn">Order</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

// + - state
// total amount
// added to cart btn changes
// add to cart in from different components such as single product for instance

export default ShoppingCart;
