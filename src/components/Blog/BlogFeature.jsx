import React from "react";
import { MoreBtn } from "../Button/Button";

const blogData = {
  id: 1,
  date: "2024年10月12日",
  title: "時計のメンテナンス: 愛用の時計を守るための重要な役割",
  description:
    "時計は単なる時間を示す道具以上の存在です。それは、あなたの日常を共に過ごす信頼できるパートナーです。大切な時計を長く美しく保つためには、定期的なメンテナンスが欠かせません。",
  imageUrl: "/assets/img/blog/blog-show.jpg",
};

const BlogFeature = () => {
  const { id, date, title, description, imageUrl } = blogData;

  return (
    <div className="container">
      <div className="ak-height-75 ak-height-lg-80"></div>
      <div className="blog-feature">
        <div
          className="feature-content"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <p className="data">{date}</p>
          <h4 className="title">{title}</h4>
          <p className="desp">{description}</p>
          <MoreBtn to={`/blog-single/${id}`} className="more-btn">
            詳細
          </MoreBtn>
        </div>
        <div className="feature-img" data-aos="fade-left" data-aos-delay="600">
          <img src={imageUrl} className="ak-bg" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default BlogFeature;
