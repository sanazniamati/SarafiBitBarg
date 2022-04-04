import "./About.css";
import GlobalHeader from "../../header/GlobalHeader";
import samandehi from "../../assets/images/saman.png";
import map from "../../assets/images/map_about.png";
export default function About() {
  return (
    <div>
      <div className="header_title_blue">
        <h1>درباره ما</h1>
      </div>
      <GlobalHeader />
      <div className="comment_container">
        <div className="page_content">
          <div className="row_col_page_about">
            <div className="row1_col1_page_about">
              <ul className="ul-contact-us">
                <li className="li-title-head"> ساعات پاسخگویی:</li>
                <li>۷ روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</li>
                <li>
                  <a className="b6473b" href="tel:02191079677">
                    91079677 - 021
                  </a>
                </li>

                <li className="li-title-head">زمان خرید و فروش:</li>
                <li>۷ روز هفته ، ۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</li>
                <li className="li-title-head">زمان احراز هویت:</li>
                <li>همه روزه حتی در ایام تعطیل از ساعت ۸صبح تا ۱۷ عصر</li>
                <li className="li-title-head">علامت تجاری:</li>
                <li>
                  به موجب اظهارنامه ثبت علامت تجاری به شماره ۱۳۹۸۵۰۱۴۰۰۰۱۰۴۰۷۸۳
                  علامت تجاری "بیت برگ" در مرکز مالکیت معنوی ج.ا ثبت گردیده است.
                </li>
                <li className="li-title-head">آدرس:</li>
                <li>
                  {" "}
                  تهران، مرکز نوآوری کسب و کار دانشگاه تهران واقع در دانشکده
                  مدیریت. (مراجعات حضوری با هماهنگی قبلی)
                </li>
              </ul>
              <img
                src={samandehi}
                alt=" نشان ملی ثبت"
                style={{ marginTop: "9px" }}
              ></img>
            </div>
            <div className="row1_col2_page_about">
              <p>
                بیت برگ (شرکت تجارت الکترونیک فرداد شریف) استارتاپی پیشرو در
                زمینه ارزهای دیجیتال است که از سال ۱۳۹۷ با هدف فراهم آوردن بستری
                امن و سریع برای خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
              </p>
              <img src={map} alt="map_live"></img>
              <a href="https://bitbarg.co/" style={{ textDecoration: "none" }}>
                بازگشت
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
