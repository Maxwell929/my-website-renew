import React from "react";

import "./backdrop.css"

const backdrop = ({ onclose }) => (
    <div onClick={onclose} className="backdrop"></div>

)


export default backdrop;

