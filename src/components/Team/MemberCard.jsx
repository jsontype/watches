import { Link } from "react-router-dom";

const MemberCard = ({ member, delay }) => {
  return (
    <div className="col">
      <div className="member-card" data-aos="fade-up" data-aos-delay={delay}>
        <Link to={`/team-member/${member.id}`}>
          <img
            src={member.image}
            className="member-img ak-bg"
            alt={member.name}
          />
        </Link>
        <div className="member-info">
          <div className="member-title">
            <Link to={`/team-member/${member.id}`} className="title">
              {member.name}
            </Link>
            <p className="desp">{member.title}</p>
          </div>
          <div className="member-info-social">
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
  );
};
export default MemberCard;
