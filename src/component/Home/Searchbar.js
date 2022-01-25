import React from "react";
import "./Searchbar.css";
import BTC from "../assets/images/BTC.png";

export default function searchbar() {
  return (
    <div className="b_curency_list_result">
      {/* <div className="b_search_bar">
        <div className="b_placeholder">
          <i class="b-placeholder_close"></i>
        </div>
      </div> */}
      <select class="index-currencies">
        <ul id="myUL">
          <li class="select-currency active">
            <button type="button">
              <div className="coin-list-item">
                <div className="coin-info">
                  <img src={BTC} style={{ width: 30, height: 30 }} alt="" />
                  <div>
                    <div className="coin-name">
                      <div className="fa-name">بیت کوین</div>
                      <div className="en-name">Bitcoin - BTC</div>
                    </div>
                  </div>
                </div>
                <div className="price">
                  <span className="buy-price-list">
                    <div className="title"> قیمت خرید</div>
                    <div>
                      <span className="priceAmount">1,138,561,071</span>
                      <span className="unit">تومان</span>
                    </div>
                  </span>
                  <span className="sell-price-list">
                    <div className="title">قیمت فروش</div>
                    <div>
                      <span className="sellPriceAmount"></span>
                      <span className="unit">تومان</span>
                    </div>
                  </span>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </select>
    </div>
  );
}
