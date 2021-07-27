
import { React, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import "./cards/cards.css";
import "./projects.css";
import Fade from 'react-reveal/Fade';
import data from "./../../data.json";
import { FaGithub } from 'react-icons/fa';
import { BiWorld } from "react-icons/bi";
import Icons from "./icons/icons";



const Card = () => {
    let time = 0
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="container-cards">

                {data.projects.map((d) => {
                    time = time + 300;
                    return (
                        <Fade bottom duration={1500} delay={time} distance="400px" >
                            <div className="">
                                <div class="flip-card" >
                                    <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                            <h6>{d.title}</h6>

                                            <img className="img-card" src={d.img} />

                                        </div>
                                        <div class="flip-card-back">
                                            <div className="box-back">
                                                <div className="card-container">
                                                    <h6>{d.title}</h6>
                                                    <div className="box-logos">
                                                        <Icons data={d}/>
                                                    </div>

                                                </div>
                                                <div className="card-container">
                                                    <p className="container-desc">{d.desc}</p>
                                                    <img className="img-card-back" src={d.img} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Fade >


                    )
                })}



            </div>

        </section >
    );



};

export default Card;
