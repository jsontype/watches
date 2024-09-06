import React from "react";
import { Link } from "react-router-dom";

export function ButtonCommon(props) {
  return (
    <Link to={props.to} className="common-btn">
      {props.children}
    </Link>
  );
}

export function MoreBtn(props) {
  return (
    <Link to={props.to} className="more-btn">
      {props.children}
    </Link>
  );
}

export function CtaBtn(props) {
  return (
    <Link to={props.to} className="cta-btn">
      <img src="/assets/img/icon/phone.svg" alt="..." />
      <span className="ms-2"> {props.children}</span>
    </Link>
  );
}
