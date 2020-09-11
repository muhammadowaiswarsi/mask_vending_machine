import React, {useState} from "react";
import "./style.css"

export default function VendingMachines() {
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
