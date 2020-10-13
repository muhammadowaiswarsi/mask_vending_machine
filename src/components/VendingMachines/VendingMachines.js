import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./style.css";
import { onCreateReseller } from "../../graphql/subsciption";
import { ClipLoader } from "react-spinners";

export default function VendingMachines({ data }) {
  console.log(data, "h");

  return (
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
          { data ? (
            <>
              <tbody>
                {data?.map((item, i) => (
                  <tr key={i}>
                    <td>{item.id}</td>
                    <td>{item.location}</td>
                    <td>{item.company}</td>
                    <td
                      className={
                        item?.onlineStatus === "offline"
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
                          : item.availableMasks.split("/")[0] < 100
                          ? "moderate-vending"
                          : ""
                      }
                    >
                      {item.availableMasks}
                    </td>
                    <td>{item.monthlySales}€</td>
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            <></>
          )}
        </table>
        {!data && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "1em",
            }}
          >
            <ClipLoader size={60} color={"#85d8ab"} />
          </div>
        )}
      </div>
      <div className="vending-footer"></div>
    </div>
  );
}
