import React from "react";
import { Link } from "react-router-dom";

import commpagesbg from "/assets/img/bg/commpagesbg.jpg";

const AboutPageHero = ({ title }) => {
  return (
    <div className="common-page">
      <img src={commpagesbg} className="bg-img ak-bg" alt="commpagesbg" />
      <div className="ak-height-100 ak-height-lg-100"></div>
      <div className="ak-height-125 ak-height-lg-40"></div>
      <div className="container">
        <div className="about-page-title">
          <h3 className="page-title">{title}</h3>
          <div className="d-flex gap-2 align-items-center">
            <Link to="/">Home</Link>
            <p> / {title}</p>
          </div>
        </div>
      </div>
      <div className="ak-height-100 ak-height-lg-100"></div>
    </div>
  );
};

export default AboutPageHero;
