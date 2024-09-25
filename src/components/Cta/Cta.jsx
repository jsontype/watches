import React from "react";
import { Link } from "react-router-dom";
import { CtaBtn } from "../Button/Button";

const ctaData = {
  title: "専門家にお問い合わせください",
  description:
    " 私たちの時計専門家があなたのニーズにお応えします。修理やカスタマイズ、自社時計の開発についてのご相談をお待ちしております。お気軽にお問い合わせください。",
};

const Cta = () => {
  const { title, description } = ctaData;

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="cta" data-aos="fade-right">
        <span className="border-pr"></span>
        <span className="border-wh"></span>
        <div className="cta-info">
          <h2 className="cta-title" data-aos="fade-left" data-aos-delay="100">
            {title}
          </h2>
          <p className="cta-desp">{description}</p>
          <CtaBtn to="/contact">お問い合わせはこちら</CtaBtn>
        </div>
      </div>
    </div>
  );
};

export default Cta;
