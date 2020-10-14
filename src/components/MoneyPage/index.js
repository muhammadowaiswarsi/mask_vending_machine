import { AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listOrders } from "../../graphql/queries";
import "./money.css";

export default function MoneyPage({ changeMoney, data }) {
  const [allChecked, setallChecked] = useState(false);
  const [listOrder, setListOrder] = useState(false);
  const [lists, changeLists] = useState([]);
  const [templists, changeTempLists] = useState([]);
  const [maskPrice, setMaskPrice] = useState("");
  const [profitShare, setProfitShare] = useState("");
  const [id, setId] = useState("");
  const checkAllCheckboxes = () => {
    if (!allChecked) changeTempLists(lists);
    else {
      const temp = [...lists];
      temp.forEach((item) => {
        item.checked = false;
      });
      changeLists(temp);
      changeTempLists([]);
    }
    setallChecked(!allChecked);
    setMaskPrice("");
    setProfitShare("");
    setId("");
  };
  const GettingApi = () => {
    API.graphql(graphqlOperation(listOrders)).then((res) => {
      console.log(res);
      let temp = { profit: 0, price: 0 };
      let temp1 = 0;
      for (let i = 0; i < templists?.length; i++) {
        for (let j = 0; j < templists?.length; j++) {
          for (let k = 0; k < res?.data?.listOrders?.items?.length; k++) {
            console.log(temp);
            if (
              templists[i].masqomatId ===
              res?.data?.listOrders?.items[k]?.masqomat?.id
            ) {
              temp.profit += templists[i]?.profitShare * 100;
              temp.price += templists[i]?.priceNetto;
              ++temp1;
            }
          }
        }
      }
      temp.total = temp1;
      setListOrder(temp);
    });
  };
  useEffect(() => {
    GettingApi();
  }, [templists]);
  useEffect(() => {
    changeLists(data);
  }, [data]);
  const updateChecked = (i) => {
    if (i || i === 0) {
      if (lists[i].checked) {
        setMaskPrice("");
        setProfitShare("");
        setId("");
        changeTempLists([]);
      } else {
        setMaskPrice(lists[i].priceNetto);
        setProfitShare(lists[i]?.profitShare);
        setId(lists[i]?.productId);
        const temp = [...templists];
        temp.push(lists[i]);
        changeTempLists(temp);
      }
      const temp = [...lists];
      temp[i].checked = !temp[i].checked;
      changeLists(temp);
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
          <p className="sales-values">
            {new Date().toDateString().split(" ")[1]}.
            {new Date().toDateString().split(" ")[2]}
          </p>
        </div>
        <div>
          <p className="sales-headings">total mask sold</p>
          <p className="sales-values sales-num-values">{listOrder?.total}</p>
        </div>
        <div>
          <p className="sales-headings">total sales</p>
          <p className="sales-values sales-num-values">{listOrder?.price}€</p>
        </div>
        <div>
          <p className="sales-headings">total profit</p>
          <p className="sales-values sales-num-values">{listOrder?.profit}%</p>
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
                <table width="100%">
                  <thead>
                    <div className="tenant-list-headings">
                      <td className="roundPart">
                        <p></p>
                      </td>
                      <td>
                        <p>name</p>
                      </td>
                      <td>
                        <p>profit share</p>
                      </td>
                      <td>
                        <p>mask price</p>
                      </td>
                    </div>
                  </thead>
                  {lists?.map((item, i) => (
                    <tr key={i} className="tenant-lists">
                      <td className="roundPart">
                        <div className="round">
                          <input
                            onChange={() => {
                              updateChecked(i);
                            }}
                            checked={allChecked || item?.checked}
                            value={allChecked || item?.checked}
                            type="checkbox"
                            id={"checkbox" + i + 1}
                          />
                          <label htmlFor={"checkbox" + i + 1}></label>
                        </div>
                      </td>
                      <td>
                        <p>{item?.name}</p>
                      </td>
                      <td>
                        <p>{item?.profitShare}%</p>
                      </td>
                      <td>
                        <p>{item?.priceNetto}€</p>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
              <div className="tenant-list-footer"></div>
            </div>
            <div className="tenant-changing-part">
              <div>
                <p>mask price:</p>
                <input
                  className="inputs"
                  value={maskPrice}
                  onChange={(e) => setMaskPrice(e.target.value)}
                  type="text"
                />
                <span>€</span>
              </div>
              <div>
                <p>profit share:</p>
                <input
                  className="inputs"
                  value={profitShare}
                  onChange={(e) => setProfitShare(e.target.value)}
                  type="text"
                />
                <span>€</span>
              </div>
              <div className="set-changes">
                <button
                  onClick={() => {
                    if (id) {
                      changeMoney(id, maskPrice, profitShare);
                    }
                  }}
                >
                  setchanges
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
