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
          Hello! I'm Wais Nazari, a passionate and versatile full-stack web developer with expertise in the MERN stack. My skills span a broad spectrum of technologies, including React, HTML5, CSS3, JavaScript, jQuery, Sass, Bootstrap, Node.js, and MongoDB. Additionally, I have experience in AI and version control using Github, along with proficiency in WordPress for creating dynamic websites. My creativity extends beyond coding; I am well-versed in graphic design, working with tools like Figma, Canva, Photoshop, Illustrator, and InDesign to craft captivating UI and UX designs. Having delved into the world of web development and graphic design, I have the perfect blend of skills to create seamless and visually appealing user experiences. I am eager to collaborate on exciting projects that leverage my diverse skill set, and I am committed to continuous learning to stay at the cutting edge of technology. Let's connect and explore potential opportunities to create extraordinary digital experiences together!

          </p>
        </div>
       
      </div>
    </div>
  );
};

export default About;
