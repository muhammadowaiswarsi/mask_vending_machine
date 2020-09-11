import React, { useState } from "react";
import { DonutChart } from "../DonutChart/DonutChart";
import { Collapse } from "react-bootstrap";
import "./style.css"

export default function MaskInventory() {
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
  return (
    <div className="mask-inventory">
      <p className="heading">mask inventory</p>
      <div className="mask-inventory-body">
        <div className="empty-state" onClick={() => setemptystate(!emptystate)}>
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
  );
}
