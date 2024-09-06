import React from "react";

const SingleTeamMemberDetails = ({ team }) => {
  const {
    name,
    title,
    image,
    desp,
    contact: { address, email, phone, website },
    socialLinks: { linkedin, facebook, twitter },
  } = team;

  return (
    <div className="container">
      <div className="ak-height-75 ak-height-lg-75"></div>
      <div className="ceo-content type_2">
        <div className="left-info" data-aos="fade-left" data-aos-delay="800">
          <img src={image} alt={name} className="img-fluid" />
        </div>
        <div className="right-info" data-aos="fade-right" data-aos-delay="800">
          <div className="ceo-title">
            <div>
              <h5 className="title">{name}</h5>
              <p className="short-title">{title}</p>
            </div>
          </div>
          <div className="ceo-desp">
            <p className="desp">{desp}</p>
            <ul className="address-list">
              <li>
                <span>Address:</span> {address}
              </li>
              <li>
                <span>Email:</span> {email}
              </li>
              <li>
                <span>Phone:</span> {phone}
              </li>
              <li>
                <span>Website:</span> {website}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex gap-5 align-items-center mt-5">
        <p>Follow Me:</p>
        <div className="member-info-social d-flex gap-3">
          <a href={linkedin} className="icon">
            <img src="/assets/img/icon/linkedinicon.svg" alt="LinkedIn" />
          </a>
          <a href={facebook} className="icon">
            <img src="/assets/img/icon/facebookicon.svg" alt="Facebook" />
          </a>
          <a href={twitter} className="icon">
            <img src="/assets/img/icon/twittericon.svg" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleTeamMemberDetails;
