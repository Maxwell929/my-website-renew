import { React, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import ReactTooltip from "react-tooltip";

const Cards = ({ data }) => {
  let webpage;
  let github;
  let linkedIn;

  let tooltipWeb = (
    <ReactTooltip id="Website" place="top" effect="solid">
      Website
    </ReactTooltip>
  );

  let tooltipGit = (
    <ReactTooltip id="Github" place="top" effect="solid">
      Github
    </ReactTooltip>
  );
  let tooltipLinkedIn = (
    <ReactTooltip id="LinkedIn" place="top" effect="solid">
      LinkedIn
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
          {tooltipWeb}
        </a>
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

  if (data.linkedIn === "") {
    linkedIn = "";
  } else {
    linkedIn = (
      <>
        <a
          href={data.linkedIn}
          target={"_blank"}
          rel="noopener"
          data-tip
          data-for="LinkedIn"
        >
          <FaGithub className="logos" />
        </a>
        {tooltipLinkedIn}
      </>
    );
  }

  return (
    <>
      <div className="">
        <div class="flip-card">
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
              <img className="img-card-back" alt={data.img} src={data.img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
