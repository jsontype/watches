import React from "react";
import { Link } from "react-router-dom";
const personData = {
  id: 1,
  name: "Michael Jack",
  title: "Founder of Company",
  quote:
    "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form injected humour, or randomised”",
  image: "/assets/img/team/ceo.jpg",
  videoLink: "https://www.youtube.com/watch?v=VcaAVWtP48A",
};

const PersonDetails = () => {
  const { name, title, quote, image, id } = personData;

  return (
    <div className="container">
      <div className="ak-height-75 ak-height-lg-75"></div>
      <div className="ceo-content">
        <div className="left-info" data-aos="fade-left" data-aos-delay="800">
          <img src={image} alt={name} className="img-fluid" />
        </div>
        <div className="right-info" data-aos="fade-right" data-aos-delay="800">
          <div className="ceo-title">
            <div>
              <h5>{name}</h5>
              <p>{title}</p>
            </div>
            <div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="109"
                  height="81"
                  viewBox="0 0 109 81"
                  fill="none"
                >
                  <g opacity="0.54" clipPath="url(#clip0_263_19)">
                    <path
                      d="M44.7042 9.09224L44.7046 9.09264C47.6942 12.2444 49.5884 15.4614 50.4749 18.952C51.3617 22.4437 51.2498 26.2476 50.1666 30.588C49.3293 33.9216 47.4174 38.4247 44.9636 43.3834C42.5138 48.3342 39.5389 53.7094 36.5939 58.7778C31.7042 67.1928 26.9046 74.7485 24.7444 78.0876C24.908 72.0925 25.2227 55.5759 24.9863 51.0284L24.9685 50.6853L24.6417 50.5789C19.667 48.96 16.0628 47.7354 13.0661 46.026C10.0899 44.3283 7.69924 42.1431 5.1941 38.5787C1.98444 34.0042 1.02823 27.9457 2.04838 22.0177C3.06824 16.0914 6.05577 10.3464 10.6624 6.41529C19.3069 -0.957044 35.1929 -0.95774 44.7042 9.09224Z"
                      stroke="#FF3D24"
                    />
                    <path
                      d="M106.512 30.5874L106.511 30.5881C105.678 33.9215 103.769 38.4246 101.317 43.3836C98.8697 48.3343 95.8964 53.7095 92.9523 58.7778C88.0609 67.1986 83.2583 74.7589 81.1003 78.0945C81.2559 72.1087 81.5832 55.5778 81.3467 51.0284L81.3289 50.6851L81.0019 50.5788C76.0194 48.9599 72.4114 47.7353 69.4147 46.026C66.4387 44.3284 64.0522 42.1435 61.5549 38.5793L61.5544 38.5786C58.3371 34.0042 57.3808 27.9459 58.4029 22.0178C59.4247 16.0916 62.416 10.3465 67.0229 6.41528C75.6675 -0.957189 91.5533 -0.957528 101.049 9.09193L101.049 9.09263C104.039 12.2446 105.937 15.4617 106.826 18.9522C107.714 22.4437 107.602 26.2474 106.512 30.5874Z"
                      stroke="#FF3D24"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_263_19">
                      <rect
                        width="108.235"
                        height="80"
                        fill="white"
                        transform="translate(0 0.570953)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
          </div>
          <div className="ceo-desp">
            <p className="desp">{quote}</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <div>
              <Link to={`/team-member/${id}`} className="more-btn">
                VIEW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="ak-height-75 ak-height-lg-75"></div>
      <div className="primary-color-border"></div>{" "}
      <div className="ak-height-75 ak-height-lg-75"></div>
    </div>
  );
};

export default PersonDetails;
