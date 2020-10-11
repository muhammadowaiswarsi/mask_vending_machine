import React, { useEffect, useState } from "react";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import "./machinepage.css";
import OnlineStatus from "../OnlineStatus";
import MaskInventory from "../MaskInventory";
import VendingMachines from "../VendingMachines/VendingMachines";
import { getResellers } from "../../graphql/queries";

export default function MachinePage() {
  const APICalling = async () => {
    try {
      const uniqClientId =
        Date.now().toString() + "9e8867d1-4d91-44a4-93eb-fb900b082913";
      const result = await API.post(
        "orderlambda",
        "https://7rbmaacwae.execute-api.eu-central-1.amazonaws.com/devenv/status",
        {
          body: {
            masqomatEasyId: "999997",
            clientId: uniqClientId,
          },
        }
      );

      if (result?.toLowerCase() === "online") {
        console.log("online");
      } else {
        //NOT ONLINE
        console.log("not-online");
      }
    } catch (err) {
      console.log("not-online ", err);
      //NOT ONLINE
    }
  };
  useEffect(() => {
    APICalling();
  }, []);
  const [data, setData] = useState();
  const getData = async () => {
    API.graphql(graphqlOperation(getResellers))
      .then((res) => {
        setData(res?.data?.listResellers?.items);
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };
  useEffect(() => {
    getData();
  }, []);
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
