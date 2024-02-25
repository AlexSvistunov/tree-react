import { useSelector } from "react-redux";
import HeaderBorder from "../Header/HeaderBorder";
import "../Products/SingleProduct.css";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../store/productsSlice";

const ShoppingCart = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    raisePrice()
  }, [cartList])

  let [totalAmount, setTotalAmount] = useState(0)

  const allProducts = useSelector((state) => state.products.productsList);

  const raisePrice = () => {
    cartList.forEach((el) => {
      const item = allProducts.find((product) => product.id === el)
      const itemPrice = item.price
      setTotalAmount((prev) => prev += itemPrice)

    })

    // const totalSum = cartList.reduce((item, index) => {
    //   item++
    // },0)
  }

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

          <div className="cart__wrapper">
            <ul className="cart__list list-reset">
              {cartList.map((productId) => {
                const product = allProducts.find(
                  (product) => product.id === productId
                );


                return (
                  <li key={product.id} className="cart-item">
                    <img
                      style={{width: '200px', height: '180px'}}
                      className="cart-item__img"
                      src={`/backend/public${product.image}`}
                    ></img>
                    <div className="cart-item__info">
                      <h3 className="cart-item__title">{product.title}</h3>
                      <div className="cart-item__bottom">
                        <div className="product-about__inner">
                          <button className="product-about__plus">+</button>
                          <div className="product-about__number">1</div>
                          <button className="product-about__minus">-</button>
                        </div>

                        <div className="cart-item__prices">
                          <div className="cart-item__currentprice">${product.price}</div>
                          <div className="cart-item__oldprice">$240</div>
                        </div>
                      </div>
                    </div>

                    <button className="cart-item__delete-btn"></button>
                  </li>
                );
              })}
            </ul>

            <div className="cart-details">
              <h3 className="cart-details__title">Order details</h3>
              <span className="cart-details__items">4 items</span>
              <div className="cart-details__total">
                <span className="cart-details__total-head">Total</span>
                <span className="cart-details__total-sum">${totalAmount}</span>
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
