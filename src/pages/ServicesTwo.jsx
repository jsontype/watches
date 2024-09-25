import React from "react";

import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import Cta from "../components/Cta/Cta";
import ServicesSectionTwo from "../components/Services/ServicesSectionTwo";

const ServicesTwo = () => {
  return (
    <>
      <CommonPageHero title={"サービス2"} />
      <ServicesSectionTwo />
      <Cta />
    </>
  );
};

export default ServicesTwo;
