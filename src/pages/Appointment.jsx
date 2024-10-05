import React from "react";

import AppointmentForm from "../components/AppointmentForm/AppointmentForm";
import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import ServiceProgres from "../components/ServiceProgres/ServiceProgres";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const Appointment = () => {
  return (
    <>
      <CommonPageHero title={"予約"} />
      <AppointmentForm />
      <div className="ak-height-125 ak-height-lg-80"></div>

      <SectionHeading
        type={true}
        bgText={"プロセス"}
        title={"プロセス / 特徴"}
        desp={
          "当店での時計修理・メンテナンスの流れをご紹介します。高品質な技術と丁寧なサービスを提供いたします。"
        }
      />
      <ServiceProgres />
    </>
  );
};

export default Appointment;
