import React from "react";

import Videos from "../components/VideoPopUp/Videos";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import FrequentlyQuestions from "../components/FrequentlyQuestions/FrequentlyQuestions";
import AppointmentForm from "../components/AppointmentForm/AppointmentForm";

const Faq = () => {
  return (
    <>
      <CommonPageHero title={"Faq"} />
      <FrequentlyQuestions />
      <Videos videoId={"VcaAVWtP48A"} />
      <AppointmentForm />
    </>
  );
};

export default Faq;
