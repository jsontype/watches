import React from "react";
import { Link } from "react-router-dom";
import { CtaBtn } from "../Button/Button";

const ctaData = {
  title: "Get in touch with our experts",
  description:
    " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
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
          <CtaBtn to="/contact">GET IN TOUCH WITH US</CtaBtn>
        </div>
      </div>
    </div>
  );
};

export default Cta;
