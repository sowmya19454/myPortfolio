import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
// import profilePic1 from "../../img/profile1.jpg";
// import profilePic2 from "../../img/profile2.jpg";
// import profilePic3 from "../../img/profile3.jpg";
// import profilePic4 from "../../img/profile4.jpg";
import badge_Yolo from "../../img/badge_yolo.png";
import badge_pullshark from "../../img/badge_pullshark.png";

const Testimonial = () => {
  const clients = [
    {
      img: badge_Yolo,
      review:
        "YOLO BADGE FROM GITHUB",
    },
    {
      img: badge_pullshark,
      review:
        " PULL SHARK BADGE FROM GITHUB",
    },
    // {
    //   img: profilePic3,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
    // {
    //   img: profilePic4,
    //   review:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    // },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Badges and stars  </span>
        <span>gained on different  </span>
        <span>platforms...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
