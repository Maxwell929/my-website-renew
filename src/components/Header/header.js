import React from "react";
import herader1 from "./header.png";
import herader2 from "./header2.png";
import data from "./../../data.json";
import "./header.css";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import TextLoop from "react-text-loop";


const Header = () => {

  return (
    <section id="header" className="header">
      <Fade top duration={1500} delay={900} distance="400px">
        <div className="box-text">
          <p>{data.p1} </p>
          <p>{data.p2}</p>
        </div>
      </Fade>

      <Fade top duration={1500} delay={1300} distance="400px">
        { }
        <TextLoop className="textLoop" interval={2000} delay={1000} adjustingSpeed={500}>
          {data.loop.map((d) => {
            return (
              <p>{d}</p>
            )
          })}
        </TextLoop>
      </Fade>

      <div className="box-image">
        <Fade left duration={1500} delay={1800} distance="400px">
          <div >
            <img className="image-header" src={herader1} alt="coder" />
          </div>
        </Fade>

        <Fade right duration={1500} delay={2200} distance="400px">
          <div >
            <img className="image-header" src={herader2} alt="computer" />
          </div>
        </Fade>
      </div>

      <Fade duration={0} delay={2200}  >
        <Link to="about" smooth duration={1000} smooth={true}><>
          <p>{data.scroll_down}</p>
          <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </>
        </Link>
      </Fade>

    </section>
  );
};

export default Header;
