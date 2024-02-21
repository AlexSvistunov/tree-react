
import "./FirstOrder.css";

const FirstOrder = () => {
  return (
    <section className="first-order">
      <div className="container">
        <div className="first-order__container">
          <h2 className="first-order__title">5% off on the first order</h2>
          <div className="first-order__inner">
            <img
              className="first-order__img"
              src="./src/images/first-order-img.png"
            ></img>

            <form className="first-order__form">
              <input
                className="first-order__input"
                placeholder="Name"
                type="text"
              ></input>
              <input
                className="first-order__input"
                placeholder="Phone number"
                type="tel"
              ></input>
              <input
                className="first-order__input"
                placeholder="Email"
                type="email"
              ></input>
              <button className="first-order__btn" type="submit">
                Get a discount
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstOrder;
