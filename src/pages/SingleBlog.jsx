import React from "react";
import { useParams } from "react-router-dom";

import BlogCard from "../components/Blog/BlogCard";
import BlogPost from "../components/Blog/BlogPost";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import SectionHeading from "../components/SectionHeading/SectionHeading";

import blogsData from "../dataJson/blogsData.json";

const SingleBlog = () => {
  const { blogId } = useParams();
  const blog = blogsData.find((post) => post.id === parseInt(blogId));

  const similarBlogs = blogsData
    .filter((post) => post.id !== parseInt(blogId))
    .slice(0, 3);

  if (!blog) {
    return <p>ブログ記事が見つかりませんでした</p>;
  }

  return (
    <>
      <CommonPageHero title={"ブログ"} />
      <BlogPost post={blog} />

      <div className="container">
        <div className="ak-height-125 ak-height-lg-80"></div>
        <SectionHeading
          type={true}
          bgText="関連ブログ"
          title="関連ブログ"
          desp="あなたが興味がありそうな関連ブログはこちら"
        />
        <div className="ak-height-50 ak-height-lg-50"></div>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-5 g-lg-4">
          {similarBlogs.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
