import React from "react";
import Button from "../Button/Button";
import "./Discounts.css";
const Discounts = () => {
  return (
    <section className="discounts">
      <div className="container discounts__container">
        <div className="discounts__inner">
          <h1 className="discounts__title">
            Amazing Discounts on Garden Products!
          </h1>

          <Button text={"Check out"} />
        </div>
      </div>
    </section>
  );
};

export default Discounts;
