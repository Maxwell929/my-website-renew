
import { React, useState } from "react";
import ReactCardFlip from 'react-card-flip';
import "./cards/cards.css";
import "./projects.css";
import Fade from 'react-reveal/Fade';
import data from "./../../data.json"




const Card = () => {


    const [img, title, year] = data.projects

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
                                            <p>{d.title}</p>
                                            <p>{d.year}</p>

                                        </div>
                                        <div class="flip-card-back">
                                            <h3>Rock paper scisors</h3>
                                            <p>2012</p>
                                            <p>We love that guy</p>
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
