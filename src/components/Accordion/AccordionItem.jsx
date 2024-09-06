import React from "react";

const AccordionItem = ({ title, content, isOpen, onToggle, index }) => {
  return (
    <div className="ak-accordion-item" data-aos="fade-up">
      <div
        className={`ak-accordion-title ${isOpen ? "active" : ""}`}
        onClick={() => onToggle(index)}
      >
        <h6>{title}</h6>
      </div>
      {isOpen && <div className="ak-accordion-tab">{content}</div>}
    </div>
  );
};

export default AccordionItem;
