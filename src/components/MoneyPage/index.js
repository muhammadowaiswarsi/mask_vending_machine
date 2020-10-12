import { AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listOrders } from "../../graphql/queries";
import "./money.css";

export default function MoneyPage() {
  const [allChecked, setallChecked] = useState(false);
  const checkAllCheckboxes = () => {
    setallChecked(!allChecked);
  };
  const GettingApi = () => {
    API.graphql(graphqlOperation(listOrders)).then((res) => {
      console.log(res?.data?.listOrders?.items);
    });
  };

  useEffect(() => {
    GettingApi();
  }, []);

  const [lists, changeLists] = useState([
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
    {
      checked: false,
      name: "rewa",
      profit: 20,
      maskPrice: "1,50€",
    },
  ]);
  const updateChecked = (i) => {
    if (i || i === 0) {
      let newList = [...lists];
      newList[i].checked = !lists[i].checked;
      changeLists(newList);
    } else {
      let newList = [...lists];
      for (let a = 0; a < lists.length; a++)
        newList[a].checked = !lists[a].checked;
      changeLists(newList);
    }
  };
  return (
    <div className="money-page-container">
      <div className="sign-out">
        <AmplifySignOut />
      </div>
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
            <div className="round">
              <input
                onChange={() => checkAllCheckboxes()}
                type="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox"></label>
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
                  <div key={i} className="tenant-lists">
                    <div className="round">
                      <input
                        onChange={() => {
                          updateChecked(i);
                        }}
                        checked={allChecked || item.checked}
                        type="checkbox"
                        id={"checkbox" + i + 1}
                      />
                      <label htmlFor={"checkbox" + i + 1}></label>
                    </div>
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
