import React from "react";
import {
  SiAdobe,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiFigma,
  SiMongodb,
  SiExpress,
  SiWordpress,
  SiCsswizardry,
  SiRedux,
} from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { AiFillApi } from "react-icons/ai";
import { FaElementor } from "react-icons/fa";

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
              <p className="pro-name">Full stack (Hope to Hand)</p>
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
                <h2>
                  <SiFigma />
                </h2>
                <h2>
                  <SiMongodb />
                </h2>
                <h2>
                  <SiExpress />
                </h2>
                <h2>
                  <DiNodejsSmall />
                </h2>
                <h2>...</h2>
              </div>
              <div className="links">
                <button className="view">
                  <a
                    href="https://hopetohands.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <span>View it here</span>{" "}
                  </a>{" "}
                </button>
                <button className="github">
                  <a href="https://github.com/Wais000/frontend-hopetohand" target="_black">
                    {" "}
                    <span>View Github Rep</span>{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="project-boxes">
              <p className="pro-name">Green Recipe</p>
              <p>
                Your eco-friendly culinary hub. Discover delicious plant-based
                recipes and sustainable cooking tips for a greener, healthier
                lifestyle.
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
                <h2>
                  <AiFillApi />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://orange-recipes.vercel.app/#/"
                    target="_blank"
                  >
                    <span> View it here </span>
                  </a>
                </button>
                <button className="github">
                  <a
                    href="https://github.com/Wais000/Recipes"
                    target="_blank"
                  >
                    <span> View Github Rep</span>
                  </a>
                </button>
              </div>
            </div>

            <div className="project-boxes">
              <p className="pro-name">Portfolio</p>
              <p>
                Welcome to 'My Portfolio' a showcase of my creative journey and
                professional accomplishments. Explore my diverse projects and
                skills, highlighting a passion for innovation and dedication to
                excellence.
              </p>

              <div className="tools">
                <h2>
                  <SiWordpress />
                </h2>
                <h2>
                  <FaElementor />
                </h2>
                <h2>
                  <SiCsswizardry />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://waisnazari.me/webdesign/"
                    target="_blank"
                  >
                    {" "}
                    <span> View it here</span>
                  </a>{" "}
                </button>
    
              </div>
            </div>
            {/* Project */}
            <div className="project-boxes">
              <p className="pro-name">Popcorn</p>
              <p>
                Your ultimate movie companion. Explore a vast collection of
                films, get personalized recommendations, and stay up-to-date
                with the latest movie releases on this intuitive and immersive
                movie app.
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
                <h2>
                  <SiRedux />
                </h2>
                <h2>
                  <AiFillApi />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://popcron-movies.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <span> View it here</span>
                  </a>{" "}
                </button>
                <button className="github">
                  {" "}
                  <a
                    href="https://github.com/Wais000/popcron_movies"
                    target="_blank"
                  >
                    {" "}
                    <span>View Github Rep</span>
                  </a>{" "}
                </button>
              </div>
            </div>

            {/* Project */}

            <div className="project-boxes">
              <p className="pro-name">Weather App</p>
              <p>
                Your go-to weather forecast tool. Stay informed about real-time
                weather conditions, accurate forecasts, and plan your day with
                confidence using this user-friendly and reliable weather app
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
                  <AiFillApi />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://weather-forecastings-app.netlify.app/"
                    target="_blank"
                  >
                    {" "}
                    <span> View it here</span>
                  </a>{" "}
                </button>
                <button className="github">
                  {" "}
                  <a
                    href="https://github.com/Wais000/Weather-app"
                    target="_blank"
                  >
                    {" "}
                    <span>View Github Rep</span>
                  </a>{" "}
                </button>
              </div>
            </div>

            {/* Projects */}
            <div className="project-boxes">
              <p className="pro-name">Joke app</p>
              <p>
                A laughter-filled haven for all joke enthusiasts. Discover a
                delightful assortment of witty and rib-tickling jokes,
                guaranteed to brighten up your day on this captivating website
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
                  <AiFillApi />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://splendid-longma-1520f3.netlify.app/"
                    target="_blank"
                  >
                    {" "}
                    <span> View it here</span>
                  </a>{" "}
                </button>
       
              </div>
            </div>
            {/* Projects */}
            <div className="project-boxes">
              <p className="pro-name">Github profile finder</p>
              <p>
              Seamlessly discover Github accounts by searching for individuals. Easily connect with developers and explore their repositories through this convenient website, simplifying your GitHub networking experience
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
                  <AiFillApi />
                </h2>
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://react-github-profile-finder-vert.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <span> View it here</span>
                  </a>{" "}
                </button>
                <button className="github">
                  {" "}
                  <a
                    href="https://github.com/Wais000/React-Github-Profile-Finder"
                    target="_blank"
                  >
                    {" "}
                    <span>View Github Rep</span>
                  </a>{" "}
                </button>
              </div>
            </div>
            {/* Project */}

            <div className="project-boxes">
              <p className="pro-name">Tic Tac Toe</p>
              <p>
              Relive the classic game of Xs and Os with a modern twist. Engage in endless fun and challenge your friends to strategic battles on this captivating website dedicated solely to the timeless Tic Tac Toe game.
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
              </div>
              <div className="links">
                <button className="view">
                  {" "}
                  <a
                    href="https://tic-tac-toe-five-self.vercel.app/"
                    target="_blank"
                  >
                    {" "}
                    <span> View it here</span>
                  </a>{" "}
                </button>
                <button className="github">
                  {" "}
                  <a
                    href="https://github.com/Wais000/tic-Tac-Toe"
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
