import React from "react";

import "./about.css"
import Fade from "react-reveal/Fade";
import me from "./me.jpeg"

const About = ({ t }) => {
  return (
    <Fade delay="500" duration="2000">
      <section id="about" className="about">
        <h2>ABOUT ME</h2>

        <div className="box-about">
          <Fade left duration={1500} delay={1800} distance="400px">
            <div >
              <img className="image-about" src={me} alt="coder" />
            </div>
          </Fade>
          <Fade top duration={1500} delay={900} distance="400px">
            <div className="about-desc">
              <p>My name is Maximilian and I'm 28 years old. Late but hopefully not too late I discovered my passion for programming. </p>
              <p>After my studies in Marketing & Sales I was putting myself more and more into the world of IT. After the first lines of code in Python and a lot of initial struggling I build more and more enthusiasm for coding.</p>
              <p>I'm interested in topics like Web-Development (HTML, CSS, JavaScript, React, Gatsby), Web-Scraping, App-Development (Flutter), Linux and other things. My future dream is to become a professional software developer.</p>
              <p>Beside coding and all the interesting IT topics I like to stay outside, play sqaush, deeptalk and cook some good southtyrolean Knödel.</p>
            </div>
          </Fade>




        </div>
      </section>
    </Fade>
  );
};

export default About;
