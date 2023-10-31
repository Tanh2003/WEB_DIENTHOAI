import React from "react";
import { PhoneCard } from "./PhoneCard";
import "./Phone.css";

export const Phone = ({ addToCart }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading-p">
            <h1>Điện thoại di động</h1>
          </div>
          <PhoneCard  addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};
