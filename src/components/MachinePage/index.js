import React, { useEffect, useState } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "./machinepage.css";
import OnlineStatus from "../OnlineStatus";
import MaskInventory from "../MaskInventory";
import VendingMachines from "../VendingMachines/VendingMachines";

const MachinePage = ({ data, vending, onlineList, oflineList }) => {
  return (
    <div className="machine-page-container">
      <div className="sign-out">
        <AmplifySignOut />
      </div>
      <div className="first-row">
        <OnlineStatus data={vending} />
        <MaskInventory data={data} />
      </div>
      <div className="second-row">
        <VendingMachines data={vending} />
      </div>
    </div>
  );
};

export default MachinePage;
