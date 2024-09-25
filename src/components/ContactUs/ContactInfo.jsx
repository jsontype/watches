import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";

const contactData = [
  {
    label: "メール",
    icon: "/assets/img/icon/email.svg",
    info: ["jsontyper@gmail.com", "yung_watches@email.com"],
  },
  {
    label: "所在地",
    icon: "/assets/img/icon/location.svg",
    info: ["東京都足立区千住寿町"],
  },
  {
    label: "電話番号",
    icon: "/assets/img/icon/phone.svg",
    info: ["+81-70-1543-3733"],
  },
  {
    label: "営業日時",
    icon: "/assets/img/icon/date-icon.svg",
    info: ["土日・祝日 / 10:00-18:00"],
  },
];

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-info">
        <div className="left-info" data-aos="fade-right">
          <div className="content">
            <SectionHeading
              bgText={"お問い合わせ"}
              title={"お問い合わせ"}
              desp={
                " お困りの事がありましたら、一度お気軽にお問い合わせくださいませ。"
              }
            />
          </div>
        </div>

        <div className="right-info">
          {contactData.map((item, index) => (
            <div className="info-card" key={index} data-aos="fade-left">
              <p>{item.label} :</p>
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <img src={item.icon} alt={item.label} />
                </div>
                <div>
                  {item.info.map((info, idx) => (
                    <p key={idx}>{info}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
