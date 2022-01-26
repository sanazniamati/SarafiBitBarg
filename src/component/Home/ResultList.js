import React from "react";
import "./ResultList.css";
import coinsData from "../../coins.json";
import { useState } from "react";

export default function ResultList() {
  // how to list_ithem work
  // const  [selectCoin, setselectCoin] = useState("");
  // const showSelection=()

  return (
    <div className="b_curency_list_result">
      <div className="b_search_bar">
        <div className="b_placeholder">
          <i class="b-placeholder_close">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.22222 13.4444C10.6587 13.4444 13.4444 10.6587 13.4444 7.22222C13.4444 3.78578 10.6587 1 7.22222 1C3.78578 1 1 3.78578 1 7.22222C1 10.6587 3.78578 13.4444 7.22222 13.4444Z"
                stroke="#80A3B6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M15.0005 14.9995L11.6172 11.6162"
                stroke="#80A3B6"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </i>
          <input
            id="myInput"
            type="text"
            value=""
            placeholder="جستجو بر اساس نام و یا نماد اختصاری"
          ></input>

          <button type="button" className="close close_list">
            <i class="b_placeholder_search">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 2L2 14"
                  stroke="#80A3B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M2 2L14 14"
                  stroke="#80A3B6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </i>
          </button>
        </div>
      </div>
      {coinsData.map((coins) => (
        <section className="index_currencies">
          <ul id="myUl" style={{ listStyle: "none" }}>
            <li className="select_currencies">
              <button type="button">
                <div className="coin-list-item">
                  <div className="coin-info">
                    <img src={coins.icon} alt="" />
                    <div style={{ marginRight: 5 }}>
                      <div
                        className="coin-name"
                        style={{
                          maxHeight: 48,
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          class="fa-name"
                          style={{
                            fontSsize: 12,
                            lineHeight: 2,
                            color: "#02a8f4",
                          }}
                        >
                          {coins.namef}
                        </div>
                        <div
                          class="en-name"
                          style={{
                            lineHeight: "normal",
                            color: "#a5a1a1",
                            fontSsize: 10,
                          }}
                        >
                          {coins.name}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    <span
                      className="buy-price-list"
                      style={{ display: "block" }}
                    >
                      <div className="title"> قیمت خرید</div>
                      <div>
                        <span className="priceAmount">{coins.price}</span>
                        <span className="unit">تومان</span>
                      </div>
                    </span>
                  </div>
                </div>
              </button>
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
}
