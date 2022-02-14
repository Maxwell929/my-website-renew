import React from "react";

import "./about.scss"
import Fade from "react-reveal/Fade";
import me from "./me.jpeg";
import data from "./../../data.json"

const About = () => {

  return (
    <Fade delay="200" duration="2000">
      <section id="about" className="about">
        <h2>{data.about}</h2>

        <div className="box-about">
          <Fade left duration={1500} delay={600} distance="400px">
            <div >
              <img className="image-about" src={me} alt="coder" />
            </div>
          </Fade>
          <Fade right duration={1500} delay={1200} distance="400px">
            <div className="about-desc">
              {data.about_me.map((i) => {
                return (
                  <>
                    <p className="about_me-desc">{i}</p>
                  </>
                );
              })}
            </div>
          </Fade>
        </div>
      </section>
    </Fade>
  );
};

export default About;
