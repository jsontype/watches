import React from "react";
import { Link } from "react-router-dom";

import { MoreBtn } from "../Button/Button";
import SectionHeading from "../SectionHeading/SectionHeading";

const speciaList = [
  {
    id: 1,
    img: "/assets/img/service/service_1.jpg",
    title: "パフォーマンスの向上とカスタマイズ",
    desp: "時計のパフォーマンスを最大限に引き出し、個々のスタイルに合わせたカスタマイズを提供します。",
  },
  {
    id: 2,
    img: "/assets/img/service/service_2.jpg",
    title: "時計の診断と修理",
    desp: "高精度な診断と専門的な修理で、お客様の時計を最適な状態に保ちます。",
  },
  {
    id: 3,
    img: "/assets/img/service/service_3.jpg",
    title: "バッテリー交換サービス",
    desp: "すべてのタイプの時計に対応した迅速なバッテリー交換サービスを提供します。",
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
                      詳細
                    </MoreBtn>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sidebar width-none">
            <div className="services-content">
              <SectionHeading
                bgText={"サービス"}
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
