import React from "react";
import { MoreBtn } from "../Button/Button";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="col">
      <div className="h-100">
        <div className="blog-card" data-aos="fade-up" data-aos-delay="100">
          <Link
            to={`/blog-single/${post.id}`}
            aria-label={`Read more about ${post.title}`}
          >
            <div className="blog-header-info">
              <img src={`${post.imageUrl}`} alt={post.title} />
            </div>
          </Link>
          <div className="blog-body-info">
            <p className="blog-text">{post.date}</p>
            <Link to={`/blog-single/${post.id}`} className="blog-title">
              {post.title}
            </Link>
          </div>
          <div className="blog-footer-info">
            <MoreBtn to={`/blog-single/${post.id}`} className="more-btn">
              READ MORE
            </MoreBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
