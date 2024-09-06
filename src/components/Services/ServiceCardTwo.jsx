import React from "react";
import { Link } from "react-router-dom";
import { MoreBtn } from "../Button/Button";

export const ServiceCardTwo = ({ service }) => {
  return (
    <div className="col">
      <div className="service-card-style-2" data-aos="fade-up">
        <div className="service-icon">
          <img src={service.icon} alt={service.title} />
        </div>
        <div className="service-desp">
          <Link to={`/service-single/${service.id}`} className="title">
            {service.title}
          </Link>
          <p className="desp">{service.description}</p>
          <MoreBtn to={`/service-single/${service.id}`} className="more-btn">
            VIEW MORE
          </MoreBtn>
        </div>
      </div>
    </div>
  );
};
