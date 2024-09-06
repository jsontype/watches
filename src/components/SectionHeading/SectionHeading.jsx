import React from "react";

const SectionHeading = ({ title, bgText, desp, type }) => {
  return (
    <div
      className={`${type && "center-section-heading"}`}
      data-aos={`${type && "fade-up"}`}
    >
      <div className={`ak-section-heading ak-style-1 ${type && "ak-type-1"}`}>
        <div className="background-text">{bgText}</div>
        <h2 className="ak-section-title">{title}</h2>
        {desp && <p className="ak-section-subtitle">{desp}</p>}
      </div>
    </div>
  );
};
export default SectionHeading;
