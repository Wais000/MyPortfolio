import React from "react";
import {
  SiAdobe,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGithub,
  SiMongodb,
  SiGnubash,
  SiBootstrap,
  SiJquery,
  SiNodedotjs,
  SiAdobeillustrator,
  SiCanva,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiProbot,
  SiMicrosoftoffice,
} from "react-icons/si";
import { DiSass } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { FaWordpress, FaFigma } from "react-icons/fa";
// import {MdDevicesOther} from "react-icons/md"

const SkillsAndTools = () => {
  return (
    <div id="skils" className="Skills_container">
      <div className="skills_bg">
        <div className="bg_items">
          <h1>
            {" "}
            <VscAzure />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiGnubash />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiCss3 />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiReact />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiAdobe />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiGithub />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiCss3 />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiHtml5 />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <DiSass />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiMongodb />
          </h1>
        </div>
        <div className="bg_items">
          <h1>
            {" "}
            <SiJavascript />
          </h1>{" "}
        </div>
      </div>
      <div className="Skills_box">
        <div className="Skills_text">
          <h1>Skills & Tools</h1>
          <p className="description">My Toolbox & Things I Can Do</p>
          <p className="details">
            The skills, tools and technologies I use to bring your products to
            life:
          </p>
        </div>
        <div className="icons">
          <div className="icon_items">
            
          <h1><SiHtml5 /> </h1>
         
           <p> HTML5</p> 
          </div>
          <div className="icon_items">
            <h1>
              <SiCss3 />{" "}
            </h1>
            <p>CSS3</p>
          </div>
          <div className="icon_items">
            <h1>
              <SiJavascript />{" "}
            </h1>
            <p>Javascript</p>
          </div>
          <div className="icon_items">
            <h1>
              <SiReact />{" "}
            </h1>
            <p>React</p>
          </div>
          <div className="icon_items">
            <h1>
              <SiGithub />{" "}
            </h1>
            <p>Github</p>
          </div>
          <div className="icon_items">
            <h1>
              <DiSass />{" "}
            </h1>
            <p>Sass</p>
          </div>
          <div className="icon_items">
            <h1>
              <SiMongodb />{" "}
            </h1>
            <p>Mongodb</p>
          </div>
          <div className="icon_items">
            <h1>
              <SiGnubash />{" "}
            </h1>
            <p>Command Line</p>
          </div>
          <div className="icon_items">
            <h1>
              <SiBootstrap />{" "}
            </h1>
            <p>Bootstrap</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiJquery />{" "}
            </h1>
            <p>jQuery</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiNodedotjs />{" "}
            </h1>
            <p>Node.js</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiMongodb />{" "}
            </h1>
            <p>Mongoose</p>
          </div>
          <div className="icon_items">
            <h1>
              <FaWordpress />{" "}
            </h1>
            <p>Wordpress</p>
          </div>
          <div className="icon_items">
            <h1>
              <FaFigma />{" "}
            </h1>
            <p>Figma</p>
          </div>
          {/*     <div className="icon_items">
            <h1><MdDevicesOther/> </h1>
            <p>Responsive Websites</p>
          </div> */}
          <div className="icon_items">
            <h1>
              <SiCanva />{" "}
            </h1>
            <p>Canva</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiAdobeillustrator />{" "}
            </h1>
            <p>Illustrator</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiAdobephotoshop />{" "}
            </h1>
            <p>photoshop</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiAdobeindesign />{" "}
            </h1>
            <p>Indesign</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiProbot />{" "}
            </h1>
            <p>AI</p>
          </div>

          <div className="icon_items">
            <h1>
              <SiMicrosoftoffice />{" "}
            </h1>
            <p>Ms.Office</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;
