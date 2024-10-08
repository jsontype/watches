import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import { MoreBtn } from "../Button/Button";
import TeamCard from "./TeamCard";

const membersData = [
  {
    id: 1,
    name: "ジョージ・ビードル",
    title: "リードメカニック",
    image: "/assets/img/member/member_1.png",
    desp: "数多くの異なる経験を持つメカニックとして、ユーモアと創造力を大切にしながら、完璧なメンテナンスと修理を行っています。お客様の車が最良の状態で走り続けることを私の使命としています。",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "2118 Thornridge Cir, 35624",
      email: "example@example.com",
      phone: "+7 (903) 679-96-15",
      website: "www.website.com",
    },
  },
  {
    id: 2,
    name: "マイケル・ジャック",
    title: "サービスアドバイザー",
    image: "/assets/img/member/member_2.png",
    desp: "業界における豊富な知識と経験をもとに、お客様に最適なサービスを提案します。お客様の満足を第一に考え、どんな問題も迅速に解決することをお約束します。",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "2118 Thornridge Cir, 35624",
      email: "example@example.com",
      phone: "+7 (903) 679-96-15",
      website: "www.website.com",
    },
  },
  {
    id: 3,
    name: "キャシー・スパーク",
    title: "診断技術者",
    image: "/assets/img/member/member_3.png",
    desp: "長年にわたる経験を活かし、最先端の技術を用いて車の問題を迅速に診断し、確実な修理を提供します。どんな挑戦にも立ち向かい、完璧を目指します。",
    socialLinks: {
      linkedin: "https://www.facebook.com/",
      facebook: "https://bd.linkedin.com/",
      twitter: "https://www.instagram.com/",
    },
    contact: {
      address: "2118 Thornridge Cir, 35624",
      email: "example@example.com",
      phone: "+7 (903) 679-96-15",
      website: "www.website.com",
    },
  },
];

const Teams = () => {
  return (
    <div className="container">
      <div className="ak-height-190 ak-height-lg-80"></div>
      <div className="team-contant">
        <div className="team-heading" data-aos="fade-right">
          <SectionHeading
            bgText={"チーム"}
            title={"私たちのチーム"}
            desp={
              "私たちのチームは、多様なバックグラウンドと専門知識を持つプロフェッショナルで構成されています。お客様の期待を超えるサービスを提供することに全力を尽くしています。"
            }
          />
          <div className="ak-height-50 ak-height-lg-10"></div>
          <MoreBtn to={"/team"}>詳細</MoreBtn>
        </div>
        <div
          className="teams"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-3 g-md-3">
            {membersData?.map((member, index) => (
              <TeamCard key={index} member={member} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Teams;
