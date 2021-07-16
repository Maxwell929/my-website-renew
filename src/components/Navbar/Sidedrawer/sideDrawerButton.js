import React, { useState } from "react";
import { Button } from "react-scroll";
import Backdrop from "../Backdrop/backdrop";
import SideDrawer from "./sideDrawer";
import "./toggleButton.css";

const DrawerToggleButton = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <img src="hamburger_button.png" className="toggle-button" alt="hamburgerButton" />
      {/* <button className="toggle-button">
        <div className="toggleButton-line" />
        <div className="toggleButton-line" />
        <div className="toggleButton-line" />
      </button> */}
    </div>
  );
};

export default DrawerToggleButton;
