import React from "react";
import "./sideDrawer.css";

const sideDrawer = ({ navlinks, onclose }) => {
  return (
    <div className="side-drawer">
      <button className="button-sidedrawer" onClick={onclose}>
        X
      </button>
      <div>
        <img className="img" src={"/images/logo.svg"} alt="logo" />
      </div>
      {navlinks}
    </div>
  );
};

export default sideDrawer;
