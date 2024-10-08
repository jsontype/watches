import React from "react";
import { Link } from "react-router-dom";
import { MoreBtn } from "../Button/Button";

const ServicesDetailContent = ({ service }) => {
  const {
    service_details: { title, description, services },
    similar_services,
  } = service;

  return (
    <>
      <div className="ak-height-75 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content">
            <div className="single-blog-list" data-aos="fade-up">
              <h4 className="single-blog-title">{title}</h4>
              <p className="single-blog-desp">{description}</p>
              <img
                src="/assets/img/service/services-single.jpg"
                data-aos="fade-up"
                className="img-fluid"
                alt="..."
              />
              <div className="ak-height-50 ak-height-lg-50"></div>
            </div>
            {services?.map((service, index) => (
              <div className="single-blog-list" data-aos="fade-up" key={service?.id || index}>
                <h4 className="single-blog-title">
                  {index + 1}.{service?.title}
                </h4>
                <p className="single-blog-desp">{service?.description}</p>
              </div>
            ))}
          </div>
          <div className="sidebar">
            <div className="d-flex flex-column gap-4 align-items-xxl-end">
              {similar_services?.map((similar_item, index) => (
                <div className="service-card-style-2" data-aos="fade-up" key={similar_item.id}>
                  <div className="service-icon">
                    <img src={similar_item.icon} alt={similar_item.title} />
                  </div>
                  <div className="service-desp">
                    <Link
                      to={`/service-single/${similar_item.id}`}
                      className="title"
                    >
                      {similar_item.title}
                    </Link>
                    <p className="desp">{similar_item.description}</p>
                    <MoreBtn
                      to={`/service-single/${similar_item.id}`}
                      className="more-btn"
                    >
                      詳細
                    </MoreBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetailContent;
