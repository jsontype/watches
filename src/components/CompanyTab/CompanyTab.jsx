import { useState } from "react";

const tabContents = [
  {
    title: "ミッション",
    description:
      "私たちの使命は、お客様に最高品質の時計とサービスを提供し、一生ものの価値を創り出すことです。<br />時計を通じて人生の特別な瞬間を刻むお手伝いをいたします。",
  },
  {
    title: "ビジョン",
    description:
      "私たちのビジョンは、時計を単なる時間を知るための道具から、スタイルやステータスの象徴へと進化させることです。<br />お客様に最適な時計を提供し、特別な輝きを引き出します。",
  },
  {
    title: "歴史",
    description:
      "私たちは長年にわたり、職人技と革新を追求してきました。<br />伝統と最新技術を融合させ、唯一無二の時計をお届けするために努力し続けています。",
  },
];

const CompanyTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="company-tab">
        <ul className="tabs">
          {tabContents?.map((tab, index) => (
            <li
              key={index}
              className={activeTab === index ? "active-tab" : ""}
              onClick={() => handleTabClick(index)}
            >
              {tab.title}
            </li>
          ))}
        </ul>

        <div className="tabs-content">
          <div className="list">
            <div className="ak-section-heading ak-style-1 ak-type-1">
              <div className="background-text">会社概要</div>
              <h3
                className="desp"
                dangerouslySetInnerHTML={{__html:tabContents[activeTab].description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyTab;
