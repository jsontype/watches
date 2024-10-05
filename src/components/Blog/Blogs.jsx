import React from "react";
import BlogCard from "./BlogCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const blogPosts = [
  {
    id: 1,
    title: "定期的な時計メンテナンスの重要性",
    date: "2024年9月17日",
    imageUrl: "/assets/img/blog/blog_3.jpg",
  },
  {
    id: 2,
    title: "信頼性の向上：時計ケアの必須ポイント",
    date: "2024年8月5日",
    imageUrl: "/assets/img/blog/blog_1.jpg",
  },
  {
    id: 3,
    title: "時計の健康を守る方法",
    date: "2024年7月12日",
    imageUrl: "/assets/img/blog/blog_2.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <SectionHeading
        type={true}
        bgText="ブログ / ニュース"
        title="ブログ / ニュース"
        desp="時計のメンテナンスや新製品の情報など、役立つ情報をお届けします。"
      />
      <div className="ak-height-50 ak-height-lg-50"></div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 g-lg-4">
        {blogPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
