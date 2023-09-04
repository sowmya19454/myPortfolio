import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_2mu5xtl",
    //     "template_m5udu2c",
    //     form.current,
    //     "VLwg1ltOWvnCYAiK_"
    //   )
    //   // service_m022pak
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       setDone(true);
    //       form.reset();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    const formData = new FormData(form.current);
  const userName = formData.get("user_name");
  const userEmail = formData.get("user_email");
  const userMessage = formData.get("message");

  const emailParams = {
    to_name: "Sowmya",      // Replace with the recipient's name
    from_name: userName,       // Sender's name from the form
    message: userMessage ,      // User's message from the form
   from_mail:userEmail
  };

  emailjs
    .send(
      "service_m022pak",    // Replace with your EmailJS service ID
      "template_xef2ueq",   // Replace with your EmailJS template ID
      emailParams,
      "FAKTcp2oqJtI6wl6O"   // Replace with your EmailJS access token
    )
    .then(
      (result) => {
        console.log(result.text);
        setDone(true);
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
