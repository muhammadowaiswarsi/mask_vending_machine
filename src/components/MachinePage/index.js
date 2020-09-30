import React, { useEffect, useState } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify';
import "./machinepage.css";
import OnlineStatus from "../OnlineStatus";
import MaskInventory from "../MaskInventory";
import VendingMachines from "../VendingMachines/VendingMachines";
import { getResellers } from "../../graphql/queries";

export default function MachinePage() {
  const [data, setData] = useState();
  const getData = async () => {
    API.graphql(graphqlOperation(getResellers))
    .then(res=>{
      setData(res?.data?.listResellers?.items)
    })
    .catch(err=>{
      console.log(err?.response)
    })
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div className="machine-page-container">
      <div className="sign-out">
        <AmplifySignOut />
      </div>
      <div className="first-row">
        <OnlineStatus />
        <MaskInventory data={data} />
      </div>
      <div className="second-row">
        <VendingMachines data={data} />
      </div>
    </div>
  );
}
