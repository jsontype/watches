import React from "react";
import { Link } from "react-router-dom";

const TeamCard = ({ member, delay }) => {
  return (
    <div className="col">
      <div
        className="team-card ak-bg"
        data-aos="fade-up"
        data-aos-delay={delay}
      >
        <img src={member.image} className="team-img" alt={member.name} />
        <div className="team-style-1">
          <div className="team-info">
            <div className="team-title">
              <Link to={`/team-member/${member.id}`}>{member.name}</Link>
              <p className="desp">{member.title}</p>
            </div>
            <div className="team-info-social">
              <Link href={member.socialLinks.linkedin} className="icon">
                <img src="/assets/img/icon/linkedinicon.svg" alt="LinkedIn" />
              </Link>
              <Link to={member.socialLinks.facebook} className="icon">
                <img src="/assets/img/icon/facebookicon.svg" alt="Facebook" />
              </Link>
              <Link to={member.socialLinks.twitter} className="icon">
                <img src="/assets/img/icon/twittericon.svg" alt="Twitter" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
