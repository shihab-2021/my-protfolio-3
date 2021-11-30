import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Navigation from "../Navigation/Navigation";
import Resume from "../Resume/Resume";

const Home = () => {
  return (
    <div id="body">
      <Navigation></Navigation>
      <div>
        <Banner></Banner>
      </div>
      <About></About>
      <Resume />
      <Contact />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
