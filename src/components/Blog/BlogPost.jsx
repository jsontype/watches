import React from "react";
import { Link } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";

const BlogPost = ({ post }) => {
  const {
    title,
    date,
    id,
    blogdetails: { img: singleImg, shortDesp, itemlist },
  } = post;

  return (
    <div className="container container-customize">
      <div className="ak-height-75 ak-height-lg-80"></div>
      <div>
        <div className="time-title" data-aos="fade-up" data-aos-delay="600">
          <p className="time">{date}</p>
          <h4 className="title">{title}</h4>
          <div className="ak-height-50 ak-height-lg-30"></div>
        </div>
        <div data-aos="fade-up" data-aos-delay="700">
          <img src={`${singleImg}`} className="single-blog-img" alt="..." />
          <div className="ak-height-50 ak-height-lg-30"></div>
        </div>

        <div data-aos="fade-up">
          <p className="desp">{shortDesp}</p>
          <div className="ak-height-50 ak-height-lg-30"></div>
        </div>
      </div>
      {itemlist.map((item, index) => (
        <div className="single-blog-list" data-aos="fade-up" key={index}>
          <h4 className="single-blog-title">{item.title}</h4>
          <p className="single-blog-desp">{item.desp}</p>
        </div>
      ))}
      <div data-aos="fade-up">
        <div className="primary-color-border"></div>
        <div className="mt-3">
          <div className="d-flex align-items-center">
            <p className="me-5">Social Share:</p>
            <div className="social-icon">
              <Link to="https://www.facebook.com/">
                <img src="/assets/img/icon/facebookicon.svg" alt="..." />
              </Link>
              <Link to="https://www.linkedin.com/">
                <img src="/assets/img/icon/linkedinicon.svg" alt="..." />
              </Link>
              <Link to="https://www.x.com/">
                <img src="/assets/img/icon/twittericon.svg" alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <CommentForm blogid={id} />
    </div>
  );
};

export default BlogPost;
