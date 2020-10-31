import { AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import Loader from "react-spinners/ClipLoader";
import { listOrders } from "../../graphql/queries";
import "./money.css";

export default function MoneyPage({ changeMoney, data }) {
  const [allChecked, setallChecked] = useState(false);
  const [listOrder, setListOrder] = useState(false);
  const [loading, setloading] = useState(false);
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
      let temp = { profit: 0, price: 0 };
      let temp1 = 0;
      for (let i = 0; i < templists?.length; i++) {
        for (let k = 0; k < res?.data?.listOrders?.items?.length; k++) {
          console.log(
            res?.data?.listOrders?.items[k]?.masqomat?.id,
            templists[i]?.masqomatId
          );
          if (
            templists[i].masqomatId ===
            res?.data?.listOrders?.items[k]?.masqomat?.id
          ) {
            temp.profit += Number(templists[i]?.profitShare);
            temp.price += Number(templists[i]?.priceNetto);
            ++temp1;
          }
        }
      }
      temp.total = temp1;
      temp.profit = Number(temp.profit) / temp1;
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
    if (!allChecked) {
      if (i || i === 0) {
        if (lists[i].checked) {
          setMaskPrice("");
          setProfitShare("");
          setId("");
          changeTempLists([]);
        } else {
          if (templists.length === 0) {
            setMaskPrice(lists[i].priceNetto);
            setProfitShare(lists[i]?.profitShare);
            setId(lists[i]?.productId);
          } else {
            setProfitShare("");
            setId("");
            setMaskPrice("");
          }
          const temp = [...templists];
          temp.push(lists[i]);
          changeTempLists(temp);
        }
        const temp = [...lists];
        temp[i].checked = !temp[i].checked;
        changeLists(temp);
      }
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
          <p className="sales-values sales-num-values">
            {listOrder?.total ? listOrder?.total : 0}
          </p>
        </div>
        <div>
          <p className="sales-headings">total sales</p>
          <p className="sales-values sales-num-values">
            {listOrder?.price ? listOrder?.price?.toFixed(2) : 0}€
          </p>
        </div>
        <div>
          <p className="sales-headings">total profit</p>
          <p className="sales-values sales-num-values">
            {listOrder?.profit && listOrder?.profit !== 0
              ? listOrder?.profit?.toFixed(2)
              : 0}
            %
          </p>
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
                    <tr className="tenant-list-headings">
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
                    </tr>
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
                      <td>{item?.location}</td>
                      <td>{item?.profitShare}%</td>
                      <td>{item?.priceNetto}€</td>
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
                <span>%</span>
              </div>
              <div className="set-changes">
                <button
                  onClick={async () => {
                    if (id) {
                      setloading(true);
                      await changeMoney(id, maskPrice, profitShare);
                      setloading(false);
                    }
                  }}
                >
                  {loading ? <Loader color="white" /> : "set changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
