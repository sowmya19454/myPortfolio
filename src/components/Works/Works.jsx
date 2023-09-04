import React, { useContext } from "react";
import "./Works.css";
import Talentsprint from "../../img/talentsprint_logo.png";
import houpd_logo from "../../img/houpd_logo.png"
import iith_logo from "../../img/iith_logo.png";
import hash_logo from "../../img/hash_logo.png"
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          
As a versatile developer, my experience spans freelancing and internships across dynamic projects.
            <br />
          
             At "houpd org," I developed an MVP inventory management app using Next.js and React.js. 
            <br />
            During my time at "hashinsert," I honed my skills as a Fullstack Developer with a focus on the MERN stack.
            <br />
            I freelanced as a Mentor and Teaching Assistant for the TECHWISE program sponsored by GOOGLE, guiding USA students in python projects. 
            <br/>
            Additionally, I contributed to an autonomous vehicle speed detection system at TiHAN-IITH for Suzuki Motor Corporation, showcasing my proficiency in Python.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={houpd_logo} alt=""style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="w-secCircle">
            <img src={hash_logo} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Talentsprint} alt=""  style={{ height: "100%" }} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Talentsprint} alt=""  style={{ height: "100%" }}/>
          </div>
          <div className="w-secCircle">
            <img src={iith_logo} alt=""  style={{ width: "100%", height: "100%" }}/>
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
