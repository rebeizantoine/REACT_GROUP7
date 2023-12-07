import React from "react";
import "../Styles/about.css";
import Video from "../Videos/video2.mp4";

const About = () => {
  return (
    <div className="about">
      <div className="about_content">
        <h1 className="aTitle">About Us</h1>
        <p className="aboutParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi Lorem ipsum dolor sit amet
          consectetur adipis Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Maxime mollitia, molestiae quas vel sint commodi icing elit.
          Maxime mollitia, molestiae quas vel sint commodi
        </p>
      </div>
      <div className="video">
        <video className="aboutVideo" controls muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
