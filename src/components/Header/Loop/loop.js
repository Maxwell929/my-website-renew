
import React from "react";
import data from "./../../../data.json";
import TextLoop from "react-text-loop";

const Loop = () => {

    return (

        <TextLoop className="textLoop" interval={2000} delay={1000} adjustingSpeed={500}>
            {data.loop.map((d) => {
                return (
                    <p>{d}</p>
                )
            })}
        </TextLoop>

    )
}

export default Loop;