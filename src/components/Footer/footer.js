import React from "react";
import data from "./../../data.json";
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import "./footer.scss";
import ReactTooltip from "react-tooltip";


const Footer = () => {
    return (
        <div className="footer">
            <a href={data.nav_github} target={"_blank"} rel="noopener"><FaGithub className="logos-nav" data-tip
                                                                                 data-for="Github"/></a>
            <a href={data.nav_linkedIn} target={"_blank"} rel="noopener"><FaLinkedin className="logos-nav" data-tip
                                                                                 data-for="LinkedIn"/></a>


            <ReactTooltip id="Github" place="top" effect="solid">
                Github
            </ReactTooltip>
            <ReactTooltip id="LinkedIn" place="top" effect="solid">
                LinkedIn
            </ReactTooltip>

            <p className="footer-name">2021 Maximilian Stelzl</p>


        </div>
    );
};

export default Footer;