import React, { useState } from "react";
import { DonutChart } from "../DonutChart/DonutChart";
import ClipLoader from "react-spinners/ClipLoader";
import "./onlinestatus.css";

export default function OnlineStatus({ data }) {
  const [active, setactive] = useState("offline");
  return (
    <div className="status">
      <p className="heading">onlinestatus</p>
      <div className="machine-card-data">
        <DonutChart
          nonCompleted="#f56071"
          txtColor={
            data?.filter((items) => items?.onlineStatus === "online").length
              ? "#85d8ab"
              : "#f56071"
          }
          completed="#85d8ab"
          value={
            data?.filter((items) => items?.onlineStatus === "online").length
          }
          totalValue={data?.length}
          valuelabel="machines online"
        />
        <div className="status-right-body">
          <div className="status-head-div">
            <p
              onClick={() => setactive("offline")}
              className={
                "offline " + (active === "offline" ? "active-tab" : "")
              }
            >
              Offline
            </p>
            <p
              onClick={() => setactive("online")}
              className={"online " + (active === "online" ? "active-tab" : "")}
            >
              Online
            </p>
          </div>
          <div className={"status-body " + active + "-body"}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>location</th>
                  <th>company</th>
                </tr>
              </thead>
              <tbody>
                {active === "offline" ? (
                  data ? (
                    data
                      ?.filter((item) => item?.onlineStatus === "offline")
                      .map((item, i) => (
                        <tr key={i}>
                          <td>{item.id}</td>
                          <td>{item.location}</td>
                          <td>{item.company}</td>
                        </tr>
                      ))
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "3em",
                      }}
                    >
                      <ClipLoader size={60} color={"#f56071"} />
                    </div>
                  )
                ) : data ? (
                  data
                    ?.filter((item) => item?.onlineStatus === "online")
                    .map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.location}</td>
                        <td>{item.company}</td>
                      </tr>
                    ))
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "3em",
                    }}
                  >
                    <ClipLoader size={60} color={"#85d8ab"} />
                  </div>
                )}
              </tbody>
            </table>
          </div>
          <div className="status-footer"></div>
        </div>
      </div>
    </div>
  );
}
