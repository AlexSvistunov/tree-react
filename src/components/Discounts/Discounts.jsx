import React from "react";
import Button from "../Button/Button";
import "./Discounts.css";
import { Link } from "react-router-dom";
import ROUTES from "../../utils/routes";
const Discounts = () => {
  return (
    <section className="discounts">
      <div className="container discounts__container">
        <div className="discounts__inner">
          <h1 className="discounts__title">
            Amazing Discounts on Garden Products!
          </h1>

          <Link className="discounts__link" to={ROUTES.ALLPRODUCTS}>Check out</Link>
        </div>
      </div>
    </section>
  );
};

export default Discounts;
