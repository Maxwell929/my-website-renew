import { React, useState } from "react";
import "./../cards.css";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

const Icons = ({ data }) => {
    let webpage;
    let github;

    const tooltipWeb = (
        <ReactTooltip id="Website" place="bottom" effect="solid">
            Website
        </ReactTooltip>
    );

    const tooltipGit = (
        <ReactTooltip id="Github" place="bottom" effect="solid">
            Github
        </ReactTooltip>
    );

    if (data.website == "") {
        webpage = <a rel="noopener" href=""></a>;
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

    if (data.github == "") {
        github = <a rel="noopener" href=""></a>;
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
            {github}
            {webpage}
        </>
    );
};

export default Icons;
