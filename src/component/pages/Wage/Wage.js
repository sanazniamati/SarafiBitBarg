import React, { useState } from "react";
import "./Wage.css";
import GlobalHeader from "../../header/GlobalHeader";
import SearchIcon from "../../assets/images/SearchIcon";
import coinsData from "../../../coins.json";

export default function Wage() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchText = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <GlobalHeader />
      <div className="header_title_blue">
        <h1>کارمزد ارزهای دیجیتال</h1>
      </div>
      <div className="wage-container">
        <div className="parent_container">
          <div className="list_page_content">
            <div className="search_box">
              <button className="btn_search">جستجو</button>
              <div className="input_search_box_view">
                <input
                  type="text"
                  value={searchTerm}
                  placeholder="جستجو بر اساس نام و یا نماد اختصاری"
                  onChange={searchText}
                />
                <SearchIcon />
              </div>
            </div>
            <p className="p_warning_wage">
              کارمزد های خرید همان کارمزد شبکه میباشد که توسط شبکه تعیین میشود و
              بیت برگ هیچ منفعتی در این امر ندارد لازم به ذکر است مرجع تعیین
              قیمت کارمزدها صرافی بین المللی بایننس است
              <p className="p_2_warning_wage">:توجه</p>
            </p>
            <div className="tabel_header">
              <div className="number_td">#</div>
              <div className="name_td">ارز دیجیتال</div>
              <div className="sell_price_td">کارمزد خرید</div>
              <div className="buy_price_td">کارمزد فروش</div>
            </div>
            {coinsData
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.namef.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((coins) => (
                <div
                  className="css-4cffwv lp-currency--row"
                  href="https://bitbarg.me/bitcoin"
                  data-symbol="BTCUSDT"
                >
                  <div className="css-ahynou">
                    <div className="number-td-2">{coins.numbercurenct}</div>

                    <div className="name-td-2">
                      <a className="d-flex" href="https://bitbarg.me/bitcoin">
                        <img
                          className="image-curency"
                          src={coins.icon}
                          alt=""
                        />
                        <div className=" container-firs-name-curency">
                          <span className="searchable">
                            {coins.namef}
                            <span className=" firs-name-curency">
                              {coins.name}
                            </span>
                          </span>
                          <span className="searchablea">Bitcoin - BTC</span>
                        </div>
                      </a>
                    </div>
                    <div className="buy-price-td container-Network-curency">
                      <div className="unit-type-2">
                        <span>شبکه</span>
                        <span>Bitcoin</span>
                        <div className="price-wage">
                          <span>516,330 تومان</span>
                        </div>
                      </div>
                      <div className="unit-type-2">
                        <span>شبکه</span>
                        <span>5,370</span>
                        <div className="price-wage">
                          <span>BEP20 تومان</span>
                        </div>
                      </div>
                    </div>
                    <div className="sell-price-td-2">
                      <span className="sell-price"></span>
                      <span className="unit-type-free">رایگان</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <ul className="pagination">
          <li className="before">
            <a href="https://bitbarg.me/fee?page=1"> « قبلی</a>
          </li>
          <li className="center">1 از 6 </li>
          <li className="Next">
            <a href="https://bitbarg.me/fee?page=2"> بعدی »</a>
          </li>
        </ul>
      </div>
    </>
  );
}
