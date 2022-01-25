import React from "react";
import "./GlobalHeader.css";
import HeaderHome from "../Home/HeaderHome";
import Bitbarglogo from "../assets/images/Bitbarglogo.svg";

export default function GlobalHeader() {
  return (
    <div className="wages-container">
      <div className="global_header_main_navbar">
        {/* <div className="main_navbar_left_side">
          <a href="/Home">
            <img className="bitbarg_logo" src={Bitbarglogo} alt="Bitbarglogo" />
          </a>
        </div> */}
        <div className="main_navbar_right_side">
          <HeaderHome />
        </div>
      </div>
      <div className="header_title_blue">
        <h1>کارمزد ارزهای دیجیتال</h1>
      </div>
    </div>
  );
}
