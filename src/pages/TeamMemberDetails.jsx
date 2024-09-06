import React from "react";
import { useParams } from "react-router-dom";

import CommonPageHero from "../components/CommonPageHero/CommonPageHero";
import SingleTeamMemberDetails from "../components/Team/SingleTeamMemberDetails";
import TeamDetailsSlider from "../components/Team/TeamDetailsSlider";

import membersData from "../dataJson/teamMembersData.json";
import SpecialistTeamMembers from "../components/Team/SpecialistTeamMembers";

const TeamMemberDetails = () => {
  const { teamId } = useParams();
  const team = membersData.find((team) => team.id === parseInt(teamId));

  if (!team) {
    return <p>Team not found</p>;
  }

  return (
    <>
      <CommonPageHero title={"TEAM PAGE"} />
      <SingleTeamMemberDetails team={team} />
      <TeamDetailsSlider />
      <SpecialistTeamMembers styleTypeTwo={true} team={team} />
    </>
  );
};

export default TeamMemberDetails;
