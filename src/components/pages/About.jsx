import React from "react";
import aboutImage from "../../pictures/aboutpic.svg"
import GraphicImage from "../../pictures/about.svg"

const About = () => {
  return (
    <div className="about_container"  id="about">
    <div className="graphic-container">
    <img src={GraphicImage} alt="FB" className="graphic_pic" />

    </div>
      
      <div className="about_box">

      <img src={aboutImage} alt="FB" className="about_img" />

      <div className="about_text">
          <p className="description">
            a fullstack Web developer living in Hamburg, Germany.
          </p>
          <p className="details">
            Wais Nazari is a junior full stack web developer with over 5 years
            of Experience as freelancer Graphic designer and working in a
            Telecommunication Company as graphic designer and marcom Manager
            (Marketing Communication Manager).
            <br /> Well-organised person, problem solver and with high attention
            to detail. <br />
            His graphic design background informs ideation to design and
            developing through to implementation.
            <br /> He can plan, design, build, launch, and maintain a website
            Interested in the entire web development spectrum and working on
            ambitious projects with positive people. He is a fan of fishing,
            gardening football playing and etc...
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default About;
