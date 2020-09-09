import React, { useState } from "react";
import { DonutChart } from "../DonutChart/DonutChart";
import { Collapse, Button } from "react-bootstrap";
import "./machinepage.css";

export default function MachinePage() {
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
  const [emptystate, setemptystate] = useState(false);
  const [warningstate, setwarningstate] = useState(false);
  const [filledstate, setfilledstate] = useState(false);
  const [emptyData] = useState([
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#f56071"
        completed="#f56071"
        value={52}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#f56071"
        completed="#f56071"
        value={52}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#f56071"
        completed="#f56071"
        value={52}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
  ]);
  const [warningData] = useState([
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#f5aa60"
        completed="#f5aa60"
        value={51}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#f5aa60"
        completed="#f5aa60"
        value={51}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#f5aa60"
        completed="#f5aa60"
        value={51}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
  ]);

  const [filledData] = useState([
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#85d8ab"
        completed="#85d8ab"
        value={156}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#85d8ab"
        completed="#85d8ab"
        value={156}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
    <>
      <DonutChart
        nonCompleted="#dddddd"
        txtColor="#85d8ab"
        completed="#85d8ab"
        value={156}
        totalValue={208}
        valuelabel="masks available"
        size={80}
        strokewidth={7}
        labelMarginTop={7}
        rotateAngle={-90}
      />
      <p className="chart-label">999999</p>
    </>,
  ]);
  const [vendingData] = useState([
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "offline",
      availableMasks: "200/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "100/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "offline",
      availableMasks: "70/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "80/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "135/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "159/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "0/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "offline",
      availableMasks: "200/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "195/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "offline",
      availableMasks: "187/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "185/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "offline",
      availableMasks: "65/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "154/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "offline",
      availableMasks: "135/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "156/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "147/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "online",
      availableMasks: "168/208",
      monthlySales: 353,
    },
    {
      id: 999564,
      location: "Kolki",
      company: "Malksjss",
      onlineStatus: "offline",
      availableMasks: "78/208",
      monthlySales: 353,
    },
  ]);
  return (
    <div className="machine-page-container">
      <div className="first-row">
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
                  className={
                    "online " + (active === "online" ? "active-tab" : "")
                  }
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
        <div className="mask-inventory">
          <p className="heading">mask inventory</p>
          <div className="mask-inventory-body">
            <div
              className="empty-state"
              onClick={() => setemptystate(!emptystate)}
            >
              <p>empty (1/200) </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="svg-inline--fa fa-caret-right fa-w-6"
                data-icon="caret-right"
                data-prefix="fas"
                height="1.5em"
                viewBox="0 0 192 512"
                style={{
                  verticalAlign: "-.125em",
                  transition: "transform .2s",
                  transform: `rotate(${emptystate ? 90 : 0}deg)`,
                }}
              >
                <path
                  fill="#f56071"
                  d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                ></path>
              </svg>
            </div>
            <Collapse in={emptystate}>
              <div className="empty-collapse-text">
                {emptyData?.map((item, i) => (
                  <div key={i} className="empty-data">
                    {item}
                  </div>
                ))}
              </div>
            </Collapse>
            <div
              className="warning-state"
              onClick={() => setwarningstate(!warningstate)}
            >
              <p>warning (1/200) </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="svg-inline--fa fa-caret-right fa-w-6"
                data-icon="caret-right"
                data-prefix="fas"
                height="1.5em"
                viewBox="0 0 192 512"
                style={{
                  verticalAlign: "-.125em",
                  transition: "transform .2s",
                  transform: `rotate(${warningstate ? 90 : 0}deg)`,
                }}
              >
                <path
                  fill="#f5aa60"
                  d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                ></path>
              </svg>
            </div>
            <Collapse in={warningstate}>
              <div className="warning-collapse-text">
                {warningData?.map((item, i) => (
                  <div key={i} className="empty-data">
                    {item}
                  </div>
                ))}
              </div>
            </Collapse>
            <div
              className="filled-state"
              onClick={() => setfilledstate(!filledstate)}
            >
              <p>filled (1/200) </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="svg-inline--fa fa-caret-right fa-w-6"
                data-icon="caret-right"
                data-prefix="fas"
                height="1.5em"
                viewBox="0 0 192 512"
                style={{
                  verticalAlign: "-.125em",
                  transition: "transform .2s",
                  transform: `rotate(${filledstate ? 90 : 0}deg)`,
                }}
              >
                <path
                  fill="#85d8ab"
                  d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
                ></path>
              </svg>
            </div>
            <Collapse in={filledstate}>
              <div className="filled-collapse-text">
                {filledData?.map((item, i) => (
                  <div key={i} className="empty-data">
                    {item}
                  </div>
                ))}
              </div>
            </Collapse>
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="vending-machines">
          <p className="heading">vending machines</p>
          <div className="vending-table">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>location</th>
                  <th>company</th>
                  <th>onlinestatus</th>
                  <th>availabe masks</th>
                  <th>monthly sales</th>
                </tr>
              </thead>
              <tbody>
                {vendingData?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.location}</td>
                    <td>{item.company}</td>
                    <td
                      className={
                        item.onlineStatus === "offline"
                          ? "vending-status-offline"
                          : ""
                      }
                    >
                      {item.onlineStatus}
                    </td>
                    <td
                      className={
                        item.availableMasks.split("/")[0] < 10
                          ? "low-vending"
                          : (item.availableMasks.split("/")[0] < 100
                          ? "moderate-vending"
                          : "")
                      }
                    >
                      {item.availableMasks}
                    </td>
                    <td>{item.monthlySales}€</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="vending-footer"></div>
        </div>
      </div>
    </div>
  );
}
