import React from "react";
import Header from "./components/Header";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import SkillsAndTools from "./components/pages/SkillsAndTools";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <SkillsAndTools />
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
