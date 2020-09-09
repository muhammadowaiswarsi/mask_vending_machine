import React, { useState } from "react";
import "./money.css";

export default function MoneyPage() {
  const [lists] = useState([
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
  ]);
  return (
    <div className="money-page-container">
      <div className="sales-figure">
        <div>
          <p className="sales-headings">sales figures</p>
          <p className="sales-values">Aug.20</p>
        </div>
        <div>
          <p className="sales-headings">total mask sold</p>
          <p className="sales-values sales-num-values">9441</p>
        </div>
        <div>
          <p className="sales-headings">total sales</p>
          <p className="sales-values sales-num-values">11895€</p>
        </div>
        <div>
          <p className="sales-headings">total profit</p>
          <p className="sales-values sales-num-values">2735€</p>
        </div>
      </div>
      <div className="tenant-option">
        <p className="headings">tenant options</p>
        <div className="tenant-body">
          <div className="select-all">
            <div class="round">
              <input type="checkbox" id="checkbox" />
              <label for="checkbox"></label>
            </div>
            <p className="points">All</p>
          </div>
          <div className="tenant-bottom-part">
            <div className="tenant-list-body">
              <div className="tenant-list-part">
                <div className="tenant-list-headings">
                  <p></p>
                  <p>name</p>
                  <p>profit share</p>
                  <p>mask price</p>
                </div>
                {lists?.map((item, i) => (
                  <div className="tenant-lists">
                    <p>
                      <div class="round">
                        <input type="checkbox" id={"checkbox" + i + 1} />
                        <label for={"checkbox" + i + 1}></label>
                      </div>
                    </p>
                    <p>{item.name}</p>
                    <p>{item.profit}%</p>
                    <p>{item.maskPrice}</p>
                  </div>
                ))}
              </div>
              <div className="tenant-list-footer"></div>
            </div>
            <div className="tenant-changing-part">
              <div>
                <p>mask price:</p>
                <input type="text" />
                <span>€</span>
              </div>
              <div>
                <p>profit share:</p>
                <input type="text" />
                <span>€</span>
              </div>
              <div className="set-changes">
                <button>setchanges</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
