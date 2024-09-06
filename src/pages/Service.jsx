import React from "react";

import Services from "../components/Services/ServicesSection";
import Cta from "../components/Cta/Cta";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";

const Service = () => {
  return (
    <>
      <CommonPageHero title={"Services"} />
      <Services />
      <Cta />
    </>
  );
};

export default Service;
