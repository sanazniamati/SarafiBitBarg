import React from "react";
import "./HeaderHome.css";

export default function HeaderHome() {
  return (
    <div className="main_navbar">
      <div className="service_dialog">
        <div className="service_container">
          {/* <ul>
            <li>
              <a href="https://bitbarg.me/profile">
                <span class="bitbarg-services bg-profile"></span>
                <span className="service-title">پروفایل</span>
              </a>
            </li>
            <li>
              <a href="https://bitbarg.me/profile/offers">
                <span class="bitbarg-services bg-offers"></span>
                <span className="service-title">سفارشات</span>
              </a>
            </li>
            <li>
              <a href="https://bitbarg.me/users/kyc">
                <span class="bitbarg-services bg-identify"></span>
                <span className="service-title">احراز هویت</span>
              </a>
            </li>
            <li>
              <a href="/bitgap">
                <span class="bitbarg-services bg-bitgap"></span>
                <span className="service-title">بیت گپ</span>
              </a>
            </li>
            <li>
              <a href="/live-price">
                <span class="bitbarg-services bg-live_price"></span>
                <span className="service-title">قیمت لحظه ای</span>
              </a>
            </li>
            <li>
              <a href="/fee">
                <span class="bitbarg-services bg-fee"></span>
                <span className="service-title">کارمزدها</span>
              </a>
            </li>
            <li>
              <a href="/alert">
                <span class="bitbarg-services bg-notif"></span>
                <span className="service-title">بمن اطلاع بده!</span>
              </a>
            </li>
            <li>
              <a href="/how-to-create-wallet">
                <span class="bitbarg-services bg-wallet"></span>
                <span className="service-title">ساخت کیف پول</span>
              </a>
            </li>
            <li>
              <a href="/faq">
                <span class="bitbarg-services bg-faq"></span>
                <span className="service-title">سوالات متداول</span>
              </a>
            </li>
            <li>
              <a href="/comment">
                <span class="bitbarg-services bg-comment"></span>
                <span className="service-title">
                  نظرات کاربران<span></span>
                </span>
              </a>
            </li>
            <li>
              <a href="/roadmap">
                <span class="bitbarg-services bg-road"></span>
                <span className="service-title"> مسیر بیت برگ</span>
              </a>
            </li>
            <li>
              <a href="/contact-us">
                <span class="bitbarg-services bg-contact-with-admin"></span>
                <span className="service-title">ارتباط با مدیریت</span>
              </a>
            </li>
            <li>
              <a href="/bug-report">
                <span class="bitbarg-services bg-bug"></span>
                <span className="service-title"> گزارش باگ</span>
              </a>
            </li>
            <li>
              <a
                // target="_blank"
                href="https://jobinja.ir/companies/bitbarg/jobs"
              >
                <span class="bitbarg-services bg-jobs"></span>
                <span className="service-title"> فرصت های شغلی</span>
              </a>
            </li>
            <li>
              <a href="/about-us">
                <span class="bitbarg-services bg-about"></span>
                <span className="service-title"> درباره ما</span>
              </a>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="main_navbar_container">
        <a
          href="https://bitbarg.me/users/login"
          class="btn btn-primary fade-text btn-login"
        >
          <div class="js-fade-text">ورود</div>
          <div class="js-fade-text">ثبت نام</div>
        </a>
        <div className="service_button">
          <svg id="toggle-nav" class="toggle-nav">
            <use xlink:href="/images/cryptoicons.svg?1.0.3#tools"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
