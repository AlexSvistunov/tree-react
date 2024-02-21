import HeaderBorder from "../Header/HeaderBorder";
import "../Products/SingleProduct.css";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <>
      <HeaderBorder />
      <section className="cart">
        <div className="container">
          <div className="cart__inner">
            <h1 className="cart__title section-title">Shopping cart</h1>
            <Link className="cart__btn" to={"/"}>
              Back to the store
            </Link>
          </div>

          <div className="cart__wrapper">
            <ul className="cart__list list-reset">
              <li className="cart-item">
                <img
                  className="cart-item__img"
                  src="/src/images/cart-img.jpg"
                ></img>
                <div className="cart-item__info">
                  <h3 className="cart-item__title">Secateurs</h3>
                  <div className="cart-item__bottom ">
                    <div className="product-about__inner">
                      <button className="product-about__plus">+</button>
                      <div className="product-about__number">1</div>
                      <button className="product-about__minus">-</button>
                    </div>

                    <div className="cart-item__prices">
                      <div className="cart-item__currentprice">$155</div>
                      <div className="cart-item__oldprice">$240</div>
                    </div>
                  </div>
                </div>

                <button className="cart-item__delete-btn"></button>
              </li>
            </ul>

            <div className="cart-details">
              <h3 className="cart-details__title">Order details</h3>
              <span className="cart-details__items">4 items</span>
              <div className="cart-details__total">
                <span className="cart-details__total-head">Total</span>
                <span className="cart-details__total-sum">$541,00</span>
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

export default ShoppingCart;
