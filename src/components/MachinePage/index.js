import React from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import "./machinepage.css";
import OnlineStatus from "../OnlineStatus";
import MaskInventory from "../MaskInventory";
import VendingMachines from "../VendingMachines/VendingMachines";

export default function MachinePage() {
  return (
    <div className="machine-page-container">
      <div className="sign-out">
        <AmplifySignOut />
      </div>
      <div className="first-row">
        <OnlineStatus />
        <MaskInventory />
      </div>
      <div className="second-row">
        <VendingMachines />
      </div>
    </div>
  );
}
