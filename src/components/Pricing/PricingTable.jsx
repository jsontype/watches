import React from "react";
import PricingCard from "./PricingCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const pricingData = [
  {
    title: "オーバーホール",
    discountPrice: "¥30,000",
    mainPrice: "¥30,000",
    options: [
      "基本的なオーバーホール",
      "高精度な部品交換",
      "全面的なメンテナンス",
    ],
    isActive: false,
    aosDelay: 0,
  },
  {
    title: "コーディネーターサービス",
    discountPrice: "¥100,000",
    mainPrice: "¥30,000",
    options: [
      "デザイン提案",
      "素材選定サポート",
      "カスタム時計製作",
    ],
    isActive: true,
    aosDelay: 50,
  },
  {
    title: "自社時計開発",
    discountPrice: "¥1,000,000",
    mainPrice: "¥100,000",
    options: [
      "コンセプトデザイン",
      "プロトタイプ製作",
      "生産ライン管理",
    ],
    isActive: false,
    aosDelay: 100,
  },
];

const PricingTable = ({ type }) => {
  return (
    <>
      {type ? (
        <div className="ak-height-75 ak-height-lg-75"></div>
      ) : (
        <div className="ak-height-160 ak-height-lg-80"></div>
      )}
      <div className="ak-bg pricing-section-bg-img">
        <div className="ak-height-100 ak-height-lg-50"></div>
        <div className="container">
          {type || (
            <>
              <SectionHeading
                type={true}
                bgText="料金プラン"
                title="料金プラン"
                desp="当店では、厳選された時計メンテナンスサービスをご提供しています。お客様のニーズに合わせた料金プランをぜひご覧ください。"
              />
              <div className="ak-height-50 ak-height-lg-50"></div>
            </>
          )}

          <div className="pricing">
            {pricingData.map((data, index) => (
              <PricingCard
                key={index}
                title={data.title}
                discountPrice={data.discountPrice}
                mainPrice={data.mainPrice}
                options={data.options}
                isActive={data.isActive}
                aosDelay={data.aosDelay}
              />
            ))}
          </div>
        </div>
        <div className="ak-height-100 ak-height-lg-80"></div>
      </div>
    </>
  );
};

export default PricingTable;
