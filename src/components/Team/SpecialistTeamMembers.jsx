import React from "react";
import { Link } from "react-router-dom";

import { MoreBtn } from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";

const speciaList = [
  {
    id: 1,
    img: "/assets/img/service/service_1.jpg",
    title: "Performance Upgrades and Customization",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
  },
  {
    id: 2,
    img: "/assets/img/service/service_2.jpg",
    title: "Engine Diagnostics and Repair",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
  },
  {
    id: 3,
    img: "/assets/img/service/service_3.jpg",
    title: "Tire Services",
    desp: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stan.",
  },
];

const SpecialistTeamMembers = ({ team }) => {
  console.log(team);

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="d-flex justify-content-center">
        <div className="sticky-content container">
          <div className="content style_2">
            <div className="service">
              {speciaList.map((item) => (
                <div
                  className="service-card"
                  data-aos="fade-left"
                  key={item?.id}
                >
                  <Link to={`/service-single/${item?.id}`} className="card-img">
                    <img src={`${item?.img}`} className="ak-bg" alt="..." />
                  </Link>
                  <div className="card-info">
                    <Link
                      to={`/service-single/${item?.id}`}
                      className="card-title"
                    >
                      {item?.title}
                    </Link>
                    <p className="card-desp">{item?.desp}</p>
                    <MoreBtn to={`/service-single/${item?.id}`}>
                      VIEW MORE
                    </MoreBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <SectionHeading
                bgText={"Services"}
                title={team?.name}
                desp={team?.desp}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistTeamMembers;
