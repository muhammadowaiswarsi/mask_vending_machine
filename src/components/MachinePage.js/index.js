import React from "react";
import { DonutChart } from "../DonutChart/DonutChart";
import "./machinepage.css";

export default function MachinePage() {
  return (
    <div className="machine-page-container">
      <div className="first-row">
        <div className="status">
          <p className="heading">onlinestatus</p>
          <div className="machine-card-data">
            <DonutChart nonCompleted="#f56071" txtColor="#85d8ab" completed="#85d8ab" value={66} />
            <div>
              <div className="status-head-div">
                <p className="offline">Offline</p>
                <p className="online">Online</p>
              </div>
              <div className="status-body">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>location</th>
                      <th>company</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                    <tr>
                      <td>9999655</td>
                      <td>Klsk</td>
                      <td>kmasdlm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mask-inventory">
          <p className="heading">mask inventory</p>
        </div>
      </div>
      <div className="second-row">
        <div className="vending-machines">
          <p className="heading">vending machines</p>
        </div>
      </div>
    </div>
  );
}
