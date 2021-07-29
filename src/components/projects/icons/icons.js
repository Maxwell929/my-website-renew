import { React, useState } from "react";
import Fade from "react-reveal/Fade";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

const Cards = ({ data }) => {


    let webpage;
    let github;

    let tooltipWeb = (
        <ReactTooltip id="Website" place="top" effect="solid">
            Website
        </ReactTooltip>
    );

    let tooltipGit = (
        <ReactTooltip id="Github" place="top" effect="solid" >
            Github
        </ReactTooltip>
    );

    if (data.website === "") {
        webpage = "";
    } else {
        webpage = (
            <>
                <a
                    href={data.website}
                    target={"_blank"}
                    rel="noopener"
                    data-tip
                    data-for="Website"
                >
                    <BiWorld className="logos" />
                </a>
                {tooltipWeb}
            </>
        );
    }

    if (data.github === "") {
        github = "";
    } else {
        github = (
            <>
                <a
                    href={data.github}
                    target={"_blank"}
                    rel="noopener"
                    data-tip
                    data-for="Github"
                >
                    <FaGithub className="logos" />
                </a>
                {tooltipGit}
            </>
        );
    }

    return (
        <>
        
                            <div className="">
                                <div class="flip-card" >                        
                                            <div className="box-back">
                                                <div className="card-container">
                                                     <p className="header-card">{data.title}</p>
                                                    <div className="box-logos">
                                                        {github}
                                                        {webpage}
                                                    </div>
                                                </div>
                                                <div className="card-container">
                                                    <p className="container-desc">{data.desc}</p>
                                                    <img className="img-card-back" src={data.img} />
                                                </div>
                                            </div>
                                </div>
                            </div>
                       
        </>
    );
};


export default Cards;
