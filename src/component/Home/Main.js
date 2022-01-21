import React from "react";
import "./Main.css";
import logo from "../assets/images/logo.png";
import BTC from "../assets/images/BTC.png";

export default function Main() {
  return (
    <>
      <div className="bit_main_container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="row_section">
          <div className="text_field ">
            <input className="input_main" type="text" />
            {/* <span className="bitqin">بیت کوین</span>
            <img
              src={BTC}
              className="bitqin"
              style={{ width: 20, hight: 20 }}
              alt="BTC"
            /> */}
            <lable className="absolute_unit"> انتخاب ارز</lable>
          </div>
          <div className="text_field ">
            <input className="input_main" type="number" id="unit" value="1" />
            <label className="absolute_unit">واحد</label>
          </div>
          <div className="text_field ">
            <input className="input_main" type="text" id="price" />
            <label className="absolute_unit">تومان</label>
          </div>
        </div>
        <div className="action_container">
          <div className="btn_sell_buy_container">
            <button id="btn_sell">
              <span>فروش</span>
            </button>
            <button id="btn_buy">
              <span>درخواست خرید</span>
            </button>
          </div>
          <div className="buy_content">
            <h2>۷ روز هفته ، ۲۴ ساعت شبانه‌روز</h2>
            <h2>در خدمت شما هستیم</h2>
          </div>
          <div className="contact">
            <a href="tel:02191079677">۹۱۰۷۹۶۷۷</a>
            {/* <span>
              <svg id="toggle-nav">
                <use xlink:href="/images/cryptoicons.svg?1.0.3#call"></use>
              </svg>
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
}
