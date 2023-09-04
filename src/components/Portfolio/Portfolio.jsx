import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import Netflix from "../../img/Netflix_demo.png";
import employee from "../../img/emp_mng_demo.png";
import blackjack from "../../img/blackjack_demo.png";
import crypto from "../../img/cryptowatch_demo.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent work</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
         <SwiperSlide>
          <img src={employee} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Netflix} alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={crypto} alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={blackjack} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
