
import { React } from "react";
import "./cards.css";
import "./projects.css";
import Fade from "react-reveal/Fade";
import data from "./../../data.json";
import Cards from "./icons/icons";



const Card = () => {
    let time = 0;
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="container-cards">

                {data.projects.map((d) => {
                    
                    time +=  400;
                    return (
                        <>
                        <Fade bottom duration={1500} delay={time} distance="400px" >
                        <Cards data={d}/>
                        </Fade >
                     </>
                    )
                })}
            </div>
        </section >
    );



};

export default Card;
