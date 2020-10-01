import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';
import "./style.css";
import { onCreateReseller } from "../../graphql/subsciption";

export default function VendingMachines({ data }) {
  const [vendingData, setVendingData] = useState([]);
  let onCreate;
  useEffect(() => {
    const tempdata = [];
    data?.forEach((item, index) => {
      item.masqomats?.items?.forEach((item1) =>
        item1.products?.items?.forEach((item2) => {
          tempdata.push({
            id: item1?.easyId,
            location: item1?.description,
            company: item1?.reseller?.companyName,
            onlineStatus: "offline",
            availableMasks: `${item2?.stock}/208`,
            monthlySales: 353,
          });
        })
      );
    });
    setVendingData(tempdata)
  }, [data]);
  useEffect(()=>{
    onCreate = API.graphql(
      graphqlOperation(onCreateReseller)
  ).subscribe({
      next: (createUserData) => {
          let createduserData = createUserData?.value?.data?.onCreateUser;
          setVendingData(previousData =>[...previousData, createduserData]);
      }
  });
  },[])
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
