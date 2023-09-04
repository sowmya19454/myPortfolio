import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>skills</span>
        <spane>
        Empowering Ideas with Code:
          <br />
          Full-Stack Proficiency in React, Node.js, MongoDB, Express;
          <br/>
          {/* ispum is simpley dummy text of printing */}
          Frontend Excellence in CSS, UI (Chakra, Bootstrap);
          <br/>
          Skillful in Python, JavaScript, C;
          <br/>
          Practiced in Git, Project Management, Collaborative Problem-Solving;
          <br/>
          Backed by ML Fundamentals and DSA Insight.
        </spane>
        <a href={Resume} download>
          <button className="button s-button" style={{ display: "flex", alignItems: "center" ,textDecoration: "none"}}>Download resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"FRONT END"}
            detail={" ReactJs,Chakra UI frame work,Html & CSS,Bootstrap,Git & Github"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"BACKEND"}
            detail={"Node Js,  Mongo DB, Express Js,  Next  Js, Python3, Javascript, C, ML(basiclevel),  Git & Github, DSA"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"SOFTSKILLS"}
            detail={
              "Project Management,Team work,Problem Solving,Adaptive,Quick learner,Attention to detail"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
