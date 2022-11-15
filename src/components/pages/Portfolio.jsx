import React from "react";
import {
  SiAdobe,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
} from "react-icons/si";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-text">
        <h1>Design. Build. Improve.</h1>
        <p className="details">
          I create beautiful websites your users will love
        </p>
      </div>
      <div className="project-display">
        <div className="mac-book"> </div>
      </div>

      <div className="projects">
        <div className="projects-header">
          <h1 className="head">A Selection Of Stuff I've Built</h1>
          <div className="dis-flex">
            <div className="project-boxes">
              <p className="pro-name">Food Recipes</p>
              <p>
                it is hard to keep your culinary game fresh if you lack new
                ideas and always prepare the same old dish that you inherited
                from your mum...
              </p>
              <div className="tools">
                <h2>
                  <SiHtml5 />
                </h2>
                <h2>
                  <SiCss3 />
                </h2>
                <h2>
                  <SiReact />
                </h2>
                <h2>
                  <SiAdobe />
                </h2>
                <h2>
                  <SiJavascript />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  <a
                    href="https://react-final-project-three.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <span>View it here</span>{" "}
                  </a>{" "}
                </button>
                <button className="github">
                  <a href="https://github.com/Wais000/Recipes" target="_black">
                    {" "}
                    <span>View Github Rep</span>{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="project-boxes">
              <p className="pro-name">Weather App</p>
              <p>
                For when you need a break from your partner but already got a
                babysitter. Now couples can go to different events in similar
              </p>

              <div className="tools">
                <h2>
                  <SiHtml5 />
                </h2>
                <h2>
                  <SiCss3 />
                </h2>
                <h2>
                  <SiReact />
                </h2>
                <h2>
                  <SiJavascript />
                </h2>
                <h2>
                  <SiAdobe />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://dazzling-malasada-36d21a.netlify.app/"
                    target="_blank"
                  >
                    <span> View it here </span>
                  </a>
                </button>
                <button className="github">
                  <a
                    href="https://github.com/Wais000/Weather-app"
                    target="_blank"
                  >
                  <span> View Github Rep</span>
                    
                  </a>
                </button>
              </div>
            </div>

            <div className="project-boxes">
              <p className="pro-name">TO DO List</p>
              <p>
                For when you need a break from your partner but already got a
                babysitter. Now couples can go to different events in similar
              </p>

              <div className="tools">
                <h2>
                  <SiHtml5 />
                </h2>
                <h2>
                  <SiCss3 />
                </h2>
                <h2>
                  <SiReact />
                </h2>
                <h2>
                  <SiJavascript />
                </h2>
                <h2>
                  <SiAdobe />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://to-do-app-snowy-nu.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <span> View it here</span>
                  </a>{" "}
                </button>
                <button className="github">
                  {" "}
                  <a
                    href="https://github.com/Wais000/to-do-app"
                    target="_blank"
                  >
                    {" "}
                    <span>View Github Rep</span>
                  </a>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
