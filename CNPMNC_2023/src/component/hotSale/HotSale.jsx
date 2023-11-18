import React from "react";
import { HotSaleCard } from "./HotSaleCard";
import { Link } from "react-router-dom";
import "./HotSale.css";

export const HotSale = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash background">
        <div className="container backgroundHotSale ">
          <div className="d_flex ">
            <div className="heading-left box-countdown box-tab-menu  ">
              <button className="box-tab-item active">Điện thoại</button>
              <button className="box-tab-item">Laptop</button>
            </div>
            <div className=" row">
              <img
                src="https://cdn2.cellphones.com.vn/x/media/wysiwyg/Gif_hotsale_cu_i_tu_n_1.gif"
                alt=""
              />
            </div>
            <div className="heading-right row box-countdown">
             <p className="c_b title1 d_flex">Kết thúc sau: </p>
              <ul className="box-time d_flex">
                <li className="d_flex">
                  <p className="time">00</p>
                  <p className="separate">:</p>
                </li>
                <li className="d_flex">
                  <p className="time">00</p>
                  <p className="separate">:</p>
                </li>
                <li className="d_flex">
                  <p className="time">00</p>
                  <p className="separate">:</p>
                </li>
                <li>
                  <p className="time">00</p>
                </li>
              </ul>
            </div>
          </div>
          <HotSaleCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};
