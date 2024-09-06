import React from "react";
import BlogCard from "./BlogCard";
import SectionHeading from "../SectionHeading/SectionHeading";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Regular Car Maintenance",
    date: "17.10.2023",
    imageUrl: "/assets/img/blog/blog_3.jpg",
  },
  {
    id: 2,
    title: "The Roadmap to Reliability: Essential Car Care Tips",
    date: "05.11.2023",
    imageUrl: "/assets/img/blog/blog_1.jpg",
  },
  {
    id: 3,
    title: "From Garage to Glory: Transform Your Vehicle's Health",
    date: "12.11.2023",
    imageUrl: "/assets/img/blog/blog_2.jpg",
  },
];

const Blogs = () => {
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <SectionHeading
        type={true}
        bgText="BlogNews"
        title="Blog / News"
        desp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
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
