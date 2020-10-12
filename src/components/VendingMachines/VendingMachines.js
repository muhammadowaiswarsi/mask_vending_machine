import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./style.css";
import { onCreateReseller } from "../../graphql/subsciption";

export default function VendingMachines({ data }) {
  console.log(data, "h");
  // const [vendingData, setVendingData] = useState([]);
  // let onCreate;
  // useEffect(() => {
  //   const tempdata = [];
  //   for (let i = 0; i < data?.length; i++) {
  //     for (let j = 0; j < data[i]?.masqomats?.items.length; j++) {
  //       for (
  //         let k = 0;
  //         k < data[i]?.masqomats?.items[j].products?.items.length;
  //         k++
  //       ) {
  //         tempdata.push({
  //           id: data[i]?.masqomats?.items[j]?.easyId,
  //           location: data[i]?.masqomats?.items[j]?.description,
  //           company: data[i]?.masqomats?.items[j]?.reseller?.companyName,
  //           onlineStatus: data[i]?.masqomats?.items[j]?.online
  //             ? "online"
  //             : "offline",
  //           availableMasks: `${data[i]?.masqomats?.items[j]?.products?.items[k]?.stock}/208`,
  //           monthlySales: 353,
  //         });
  //       }
  //     }
  //   }
  //   setVendingData([...tempdata]);
  // }, [data]);
  // useEffect(() => {
  //   onCreate = API.graphql(graphqlOperation(onCreateReseller)).subscribe({
  //     next: (createUserData) => {
  //       let createduserData = createUserData?.value?.data?.onCreateUser;
  //       setVendingData((previousData) => [...previousData, createduserData]);
  //     },
  //   });
  // }, []);

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
        </table>
      </div>
      <div className="vending-footer"></div>
    </div>
  );
}
