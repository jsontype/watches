import React from "react";

import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import PersonDetails from "../components/Team/PersonDetails";
import MemberCard from "../components/Team/MemberCard";

import membersData from "../dataJson/teamMembersData.json";

const Team = () => {
  return (
    <>
      <CommonPageHero title={"Team"} />
      <PersonDetails />
      <div className="container">
        <div className="all-members">
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
            {membersData?.map((member, index) => (
              <MemberCard key={index} member={member} delay={index * 50} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
