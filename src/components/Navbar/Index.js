import React, { useState } from "react";
import machinePic from "../../assets/machine.jpeg";
import "./navbar.css";

export default function Navbar({selectNav}) {
  const [active, setactive] = useState("machine");
  return (
    <div className="navbar">
      <div className="navbar-upper-part">
        <div onClick={() =>{ setactive("machine"); selectNav("machine")}} className="machine">
          <div className={active === "machine" ? "active" : ""}>
            <img src={machinePic} alt="" />
          </div>
          <p className="machine-name">machines</p>
        </div>
        <div onClick={() =>{ setactive("money"); selectNav("money")}} className="money">
          <div className={active === "money" ? "active" : ""}>
            <p className="money-symbol">$</p>
          </div>
          <p>money</p>
        </div>
      </div>
      <div onClick={() => setactive("settings")} className="settings">
        <div className={active === "settings" ? "active" : ""}>
          <img src={machinePic} alt="" />
        </div>
        <p>Settings</p>
      </div>
    </div>
  );
}
