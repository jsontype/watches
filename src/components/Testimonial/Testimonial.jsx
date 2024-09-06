import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import SectionHeading from "../SectionHeading/SectionHeading";

import testimaonialBgImg from "/assets/img/bg/testimaonial-img-bg.png";

const sliderData = [
  {
    id: 1,
    name: "Roberts Bush",
    from: "From Canada",
    desp: "“There are many variations of passages of Lorem Ipsum available,butthe majority have suffered alteration in some form injected humour, or randomised”",
    img: "/assets/img/testmaonail/testimaonial.png",
  },
  {
    id: 2,
    name: "Butthe Bush",
    from: "From Canada",
    desp: "“There are many variations of passages of Lorem Ipsum available,butthe majority have suffered alteration in some form injected humour, or randomised”",
    img: "/assets/img/testmaonail/testmaonail_1.png",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="ak-testimonal-controll">
        <div className="testimonal-heading" data-aos="fade-right">
          <SectionHeading
            bgText="Testimonial"
            title={"SEE WHAT OUR Satisfied"}
          />
        </div>
        <div className="testimonal-controll" data-aos="fade-left">
          <button
            className="testimonal-prev button"
            onClick={() => swiperRef.current.slideNext()}
          >
            <img src="/assets/img/icon/prev.svg" alt="..." />
            <span> prev</span>
          </button>
          <button
            className="testimonal-next button"
            onClick={() => swiperRef.current.slidePrev()}
          >
            <span>next</span> <img src="/assets/img/icon/next.svg" alt=".." />
          </button>
        </div>
      </div>
      <div className="ak-height-50 ak-height-lg-50"></div>
      <div className="ak-testimonal" data-aos="fade-up">
        <div className="ak-slider ak-slider-testimonal">
          <Swiper
            speed={1000}
            loop={true}
            slidesPerView={"auto"}
            effect={"fade"}
            modules={[EffectFade]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonal-info ak-style1">
                  <div className="slider-info">
                    <div className="d-flex justify-content-between align-items-end">
                      <div>
                        <h5 className="name">{item.name}</h5>
                        <p className="from">{item.from}</p>
                      </div>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="109"
                          height="81"
                          viewBox="0 0 109 81"
                          fill="none"
                        >
                          <g opacity="0.7" clipPath="url(#clip0_219_726)">
                            <path
                              d="M24.8606 80.2504C27.2135 76.6896 47.9194 44.6582 51.3233 31.1053C53.5194 22.3053 51.8096 15.5445 45.739 9.14449C36.0449 -1.09865 19.8567 -1.11431 11.0096 6.43079C1.59785 14.4622 -1.14726 29.8504 5.45666 39.2622C10.539 46.4935 15.2292 48.219 25.1586 51.4503C25.4253 56.5797 24.9861 77.0975 24.8606 80.2504Z"
                              fill="#FF3D24"
                            />
                            <path
                              d="M81.2214 80.2504C83.5743 76.6896 104.28 44.6582 107.668 31.1053C109.88 22.3053 108.155 15.5445 102.084 9.14449C92.4057 -1.09865 76.2175 -1.11431 67.3704 6.43079C57.9586 14.4622 55.1978 29.8504 61.8174 39.2622C66.8841 46.4935 71.5743 48.219 81.5194 51.4503C81.7861 56.5797 81.3312 77.0975 81.2214 80.2504Z"
                              fill="#FF3D24"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_219_7264">
                              <rect
                                width="108.235"
                                height="80"
                                fill="white"
                                transform="translate(0.671997 0.966797)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <h4 className="desp">{item.desp}</h4>
                  </div>
                  <img
                    src={item.img}
                    alt="..."
                    className="testimaonial-slide-img"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="testimonal-img">
          <img src={testimaonialBgImg} alt="testimonal-img" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
