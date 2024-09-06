import React, { useState } from "react";

import BlogCard from "../components/Blog/BlogCard";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import BlogFeature from "../components/Blog/BlogFeature";
import Pagination from "../components/Pagination/Pagination";

import blogsData from "../dataJson/blogsData.json";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(blogsData.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogsData.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <CommonPageHero title={"Blogs"} />
      <BlogFeature />
      <div className="container">
        <div className="ak-height-50 ak-height-lg-50"></div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 g-lg-4">
          {currentPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Blog;
