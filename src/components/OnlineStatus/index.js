import React, { useState } from "react";
import { DonutChart } from "../DonutChart/DonutChart";
import "./onlinestatus.css";

export default function OnlineStatus() {
  const [active, setactive] = useState("offline");
  const [offlineData] = useState([
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
    { id: "999654", location: "KoLIN", company: "Mlskjsd" },
  ]);
  const [onlineData] = useState([
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
    { id: "999656", location: "KoLIN", company: "Mlskjhe" },
  ]);
  return (
    <div className="status">
      <p className="heading">onlinestatus</p>
      <div className="machine-card-data">
        <DonutChart
          nonCompleted="#f56071"
          txtColor="#85d8ab"
          completed="#85d8ab"
          value={150}
          totalValue={200}
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
                {active === "offline"
                  ? offlineData.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.location}</td>
                        <td>{item.company}</td>
                      </tr>
                    ))
                  : onlineData.map((item, i) => (
                      <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.location}</td>
                        <td>{item.company}</td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
          <div className="status-footer"></div>
        </div>
      </div>
    </div>
  );
}
