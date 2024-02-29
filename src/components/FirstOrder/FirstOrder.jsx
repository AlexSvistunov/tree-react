import "./FirstOrder.css";
import axios from "axios";
import { URL } from "../../utils/constants";
import { useState } from "react";
import { useForm } from "react-hook-form";

const FirstOrder = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    axios
      .post(`${URL}/sale/send`, data)
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
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                {...register("name", { required: true })}
                className="first-order__input"
                placeholder="Name"
                type="text"
              ></input>
              {errors.name && <span>This field is required</span>}

              <input
                {...register("phone", { required: true })}
                className="first-order__input"
                placeholder="Phone number"
                type="tel"
              ></input>
              {errors.phone && <span>This field is required</span>}

              <input
                {...register("email", { required: true })}
                className="first-order__input"
                placeholder="Email"
                type="email"
              ></input>
              {errors.email && <span>This field is required</span>}

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
