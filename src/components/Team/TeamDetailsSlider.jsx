import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCoverflow,
  Autoplay,
  Keyboard,
} from "swiper/modules";

const slidesData = [
  {
    id: 1,
    image: "/assets/img/team/team_single_page_slider_1.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    image: "/assets/img/team/team_single_page_slider_2.jpg",
    alt: "Slide 2",
  },
  {
    id: 3,
    image: "/assets/img/team/team_single_page_slider_3.jpg",
    alt: "Slide 3",
  },
  {
    id: 4,
    image: "/assets/img/team/team_single_page_slider_1.jpg",
    alt: "Slide 4",
  },
  {
    id: 5,
    image: "/assets/img/team/team_single_page_slider_2.jpg",
    alt: "Slide 5",
  },
  {
    id: 6,
    image: "/assets/img/team/team_single_page_slider_3.jpg",
    alt: "Slide 6",
  },
];

const TeamDetailsSlider = () => {
  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="team-single-page-slider ak-slider">
        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay, Keyboard]}
          loop={true}
          speed={1000}
          autoplay={true}
          slidesPerView="auto"
          effect="coverflow"
          spaceBetween={"12%"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          keyboard={{ enabled: true }}
          className="mySwiper"
          navigation={{
            nextEl: ".button-next",
            prevEl: ".button-prev",
          }}
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img className="slide-img" src={slide.image} alt={slide.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="team-single-page-swiper-controll">
          <div className="button-next button-style">
            <img src="/assets/img/icon/prev.svg" alt="Next" />
          </div>
          <div className="button-prev button-style">
            <img src="/assets/img/icon/next.svg" alt="Previous" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsSlider;
