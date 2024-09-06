import React from "react";
import { MoreBtn } from "../Button/Button";

const blogData = {
  id: 1,
  date: "17.10.2023",
  title: "Driving with Confidence: The Crucial Role of Routine Car Maintenance",
  description:
    "Your car is more than just a means of getting from point A to point B; it's a reliable companion on your daily journey. Just like any dependable friend, your car requires regular care to ensure it remains in...",
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
            READ MORE
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
