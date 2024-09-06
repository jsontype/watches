import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPages() {
  return (
    <div className="error-section error-page-bg-img ak-bg ak-center">
      <div className="error-content">
        <h1 className="error-title ak-stroke-number color-white">404</h1>
        <h2 className="erro-sub-title">Sorry! The Page isn't Found Here</h2>
        <p className="erro-desp">
          Fortunately, since it is mainly a client-side issue, it is relatively
          easy for website owners to fix the 404 error. This article will
          explain the possible causes of error 404 and show four effective
          methods to resolve it.Fortunately, since it is mainly a client-side
          issue.
        </p>
        <div className="go-to-home">
          <Link to="/" className="common-btn">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
