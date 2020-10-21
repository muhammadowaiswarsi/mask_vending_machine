import React, { useEffect, useState } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "./machinepage.css";
import OnlineStatus from "../OnlineStatus";
import MaskInventory from "../MaskInventory";
import VendingMachines from "../VendingMachines/VendingMachines";

const MachinePage = ({ ListOrder, vending, onlineList, oflineList, temp }) => {
  return (
    <div className="machine-page-container">
      <div className="sign-out">
        <AmplifySignOut />
      </div>
      <div className="first-row">
        <OnlineStatus data={vending} />
        <MaskInventory data={vending} />
      </div>
      <div className="second-row">
        <VendingMachines ListOrder={ListOrder} data={vending} />
      </div>
    </div>
  );
};

export default MachinePage;
