import React from "react";

import Testimonial from "../components/Testimonial/Testimonial";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";

const Testimonials = () => {
  return (
    <>
      <CommonPageHero title={"お客様の声"} />
      <Testimonial />
    </>
  );
};

export default Testimonials;
