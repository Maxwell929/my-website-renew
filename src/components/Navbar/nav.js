import React from "react";
import { useState } from "react";

import "./nav.css";
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import logo from "./logo_small.png"





const Navbar = () => {
  return (
    <section className="nav">
      <Fade top duration={1500} delay={0} distance="50px">
        <Link to="header" smooth duration={1000} smooth={true}><img src={logo} className="logo"></img>
        </Link>
      </Fade>
      <div className="nav-links">
        <Fade top duration={1500} delay={0} distance="50px">
          <Link to="about" smooth duration={1000} smooth={true}><button class="btn-4"><span>About me</span></button>
          </Link>
        </Fade>
        <Fade top duration={1500} delay={300} distance="50px">
          <Link to="projects" smooth duration={1000} smooth={true}> <button class="btn-4"><span>Projects</span></button>
          </Link>
        </Fade>
        <Fade top duration={1500} delay={600} distance="50px">
          <Link to="contact" smooth duration={1000} smooth={true}> <button class="btn-4"><span>Contact</span></button>
          </Link>
        </Fade>
      </div >


    </section>
  );
};

export default Navbar;
