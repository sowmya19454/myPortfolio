import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>sowmya19454@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <a href="https://www.linkedin.com/in/sowmya-sannidhanam" >
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://github.com/sowmya19454" >
          <Gitub color="white" size={"3rem"} />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
