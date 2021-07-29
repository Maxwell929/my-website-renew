import React from "react";
import data from "./../../data.json";
import { FaGithub } from 'react-icons/fa';
import "./footer.css";
import ReactTooltip from "react-tooltip";



const Footer = () => {
  return (
    <div className="footer">
      <a href={data.nav_github} target={"_blank"} rel="noopener"><FaGithub className="logos-nav" data-tip
        data-for="Github" /></a>


      <ReactTooltip id="Github" place="top" effect="solid" >
        Github
      </ReactTooltip>

      <p className="footer-name">2021 Maximilian Stelzl</p>


    </div>
  );
};

export default Footer;