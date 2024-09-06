import React from "react";
import { Link } from "react-router-dom";

const CommonPageHero = ({ title }) => {
  return (
    <div className="container">
      <div className="common-page-title">
        <h3 className="page-title">{title}</h3>
        <div className="d-flex gap-2 align-items-center">
          <Link to="/">Home</Link>
          <p> / {title}</p>
        </div>
      </div>
      <div className="primary-color-border"></div>
    </div>
  );
};

export default CommonPageHero;
