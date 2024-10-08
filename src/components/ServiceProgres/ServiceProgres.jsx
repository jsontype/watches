import React from "react";
import { Link } from "react-router-dom";

const serviceProgresData = [
  {
    id: 1,
    number: 1,
    icon: "/assets/img/icon/service_logo.png",
    title: "修理サービス",
    desp: "- 時計のメンテナンスをもっと手軽に -",
  },
  {
    id: 2,
    number: 2,
    icon: "/assets/img/icon/service_logo.png",
    title: "コーディネーターサービス",
    desp: "- 時計選びのエキスパートがあなたをサポート -",
  },
  {
    id: 3,
    number: 3,
    icon: "/assets/img/icon/service_logo.png",
    title: "高価買取・低価格販売",
    desp: "- 大切な時計を最高の価格で -",
  },
];

const ServiceProgres = () => {
  return (
    <section className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="row  row-cols-1 row-cols-xl-3 g-4">
        {serviceProgresData?.map((item) => (
          <div
            className="service-progress-card"
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={
              item.number == 1 ? "" : item.number == 2 ? "100" : "200"
            }
          >
            <div className="progress-item">
              <h4 className="ak-stroke-number color-white">{item.number}</h4>
              <div className="ak-border-width"></div>
            </div>
            <div className="service-item">
              <div className="heartbeat-icon">
                <Link to="#">
                  <span className="ak-heartbeat-btn">
                    <img src={item.icon} alt="..." />
                  </span>
                </Link>
              </div>
              <div className="service-info">
                <h4 className="title">{item.title}</h4>
                <p className="desp">{item.desp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceProgres;
