import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Header from "./Header";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <Projects />
      <AboutMe />
      <ContactMe />
    </div>
  );
};

export default Home;
