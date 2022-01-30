import React from "react";
import "./Profile.css";
import GlobalHeader from "../../header/GlobalHeader";
import login from "../../assets/images/login.png";

export default function Profile() {
  return (
    <>
      <GlobalHeader />
      <div className="main_box_container" style={{ direction: "ltr" }}>
        <div className="main_form">
          <div style={{ height: 145 }}>
            <img src={login} alt="login" style={{ width: 145, height: 149 }} />
          </div>
          <p className="information">لطفا شماره تلفن خود را وارد نمایید</p>
          <form id="authentication-phone">
            <div className="v-input ">
              <div className="v-input__control">
                <div className="v-input__slot">
                  <fieldset aria-hidden="true">
                    <legend sty>
                      <span>​</span>
                    </legend>
                  </fieldset>
                  <div className="v-text-field__slot">
                    <label
                      for="input-5"
                      className="v-label v-label--active theme--light"
                      st
                    >
                      شماره تلفن
                    </label>
                    <input
                      className="phone-number--input"
                      autocomplate="off"
                      id="input-5"
                      placeholder="09xxxxxxxxx"
                      type="number"
                    />
                  </div>
                </div>
                <div className="v-text-field__details">
                  <div className="v-messages theme--light">
                    <div className="v-messages__wrapper"></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="v-btn v-btn--contained theme--light v-size--default primary"
              >
                <span class="v-btn__content">ادامه</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
