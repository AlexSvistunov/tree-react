import "./FirstOrder.css";
import axios from "axios";
import { URL } from "../../utils/constants";
import { useState } from "react";

const FirstOrder = () => {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  console.log(nameValue);
  console.log(phoneValue);
  console.log(emailValue);

  const handleGetDiscount = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/sale/send`, {
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
      })

      .then((response) => {
        console.log(response);
        if(response.status === 200) {
          setSubmitted(true);
        }
      })

      .catch((error) => console.log(error));
  };
  return (
    <section className="first-order">
      <div className="container">
        <div className="first-order__container">
          <h2 className="first-order__title">5% off on the first order</h2>
          <div className="first-order__inner">
            <img
              className="first-order__img"
              src="/src/images/first-order-img.png"
            ></img>

            <form
              className="first-order__form"
              onSubmit={handleGetDiscount}
            >
              <input
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
                className="first-order__input"
                placeholder="Name"
                type="text"
              ></input>
              <input
                value={phoneValue}
                onChange={(e) => setPhoneValue(e.target.value)}
                className="first-order__input"
                placeholder="Phone number"
                type="tel"
              ></input>
              <input
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="first-order__input"
                placeholder="Email"
                type="email"
              ></input>
              <button
                className={
                  submitted
                    ? "first-order__btn first-order__btn--submitted"
                    : "first-order__btn"
                }
                type="submit"
              >
                {submitted ? 'Request Submitted' : 'Get a discount'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstOrder;
