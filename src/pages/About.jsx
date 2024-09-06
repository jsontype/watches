import React from "react";

import AboutPageHero from "../components/CommonPageHero/AboutPageHero";
import CompanyTab from "../components/CompanyTab/CompanyTab";
import ChooseUs from "../components/ChooseUs/ChooseUs";
import AutoCounter from "../components/AutoCounter/AutoCounter";
import Testimonial from "../components/Testimonial/Testimonial";
import Teams from "../components/Team/Teams";
import PricingTable from "../components/Pricing/PricingTable";
import TrustedClient from "../components/TrustedClient/TrustedClient";
import Cta from "../components/Cta/Cta";

const About = () => {
  return (
    <>
      <AboutPageHero title={"About Us"} />
      <CompanyTab />
      <ChooseUs />
      <AutoCounter />
      <Testimonial />
      <Teams />
      <PricingTable />
      <TrustedClient />
      <Cta />
    </>
  );
};

export default About;
