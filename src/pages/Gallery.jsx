import React from "react";
import { Link } from "react-router-dom";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";

import imageData from "../dataJson/galleryImgData.json";

const Gallery = () => {
  return (
    <>
      <CommonPageHero title={"Gallery"} />
      <div className="container">
        <div className="ak-height-75 ak-height-lg-80"></div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail]}
          elementClassNames={"gallery"}
        >
          {imageData?.map((image, index) => (
            <Link
              to={image.thumbnail}
              key={index}
              className={`item ${image.orientation}`}
            >
              <img src={image.thumbnail} alt={image.orientation} />
              <div className="frame gallery-hover-icon">
                <span>
                  <img src="/assets/img/icon/zoom.svg" alt="zoom" />
                </span>
              </div>
            </Link>
          ))}
        </LightGallery>
      </div>
    </>
  );
};

export default Gallery;
