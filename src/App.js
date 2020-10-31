import React, { useEffect, useState } from "react";
import "./App.css";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyForgotPassword,
  AmplifyConfirmSignIn,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { AuthState } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Navbar from "./components/Navbar/Index";
import MachinePage from "./components/MachinePage/index.js";
import MoneyPage from "./components/MoneyPage";
import { getMasqomatUser, getResellers, listOrders } from "./graphql/queries";
import { createUser, UpdateOrders } from "./graphql/mutation";
import { onUpdateProduct } from "./graphql/subsciption";
import Form from "./components/Form/form";
import Loader from "react-spinners/ClipLoader";
import Axios from "axios";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [user, setUser] = useState();
  const [navselection, setnavselection] = useState("machine");
  const [data, setData] = useState(false);
  const [vending, setVending] = useState(false);
  const [ListOrder, setListOrder] = useState(false);
  const [onlineList, setOnlineList] = useState(false);
  const [offlineList, setOfflineList] = useState(false);
  const [new1, setnew] = useState(false);
  const [verified, setverified] = useState("loading");
  const [loader, setloader] = useState(false);

  const selectNav = (data) => {
    setnavselection(data);
  };

  const APICalling = async (masqomatEasyId, masqomatId) => {
    try {
      const uniqClientId = masqomatId;
      const result = await Axios({
        url: "https://arcane-plains-65295.herokuapp.com/status",
        method: "POST",
        data: {
          masqomatEasyId: masqomatEasyId,
          clientId: uniqClientId,
        },
      });
      if (result?.data?.toLowerCase() === "online") {
        return true;
      } else {
        //NOT ONLINE
        return false;
      }
    } catch (err) {
      return false;
      //NOT ONLINE
    }
  };
  // useEffect(() => {
  //   if (verified) APICalling();
  // }, [user, verified]);

  const getData = async (id) => {
    setloader(true);
    API.graphql(graphqlOperation(getResellers, { id }))
      .then((res) => {
        let temp = res?.data?.listMasqomats?.items;
        for (let j = 0; j < temp.length; j++) {
          APICalling(temp[j]?.easyId, temp[j]?.id).then((res) => {
            console.log(res, "status")
            setData((prev) => {
              let tempData = prev ? [...prev] : [];
              temp[j].online = res;
              if (res) {
                let temp1 = onlineList ? [...onlineList] : [];
                temp1.push(temp);
                setOnlineList(temp1);
              } else {
                let temp2 = offlineList ? [...offlineList] : [];
                temp2.push(temp);
                setOfflineList(temp2);
              }
              tempData.push(...temp);
              if (j === temp.length - 1) {
                setnew(Date.now());
                return tempData;
              }
            });
          });
        }
        if (res?.data?.listMasqomats?.items.length === 0) {
          setData([]);
          setloader(false);
        }
      })
      .catch((err) => {
        setloader(false);
        setData(false);
      });
  };

  useEffect(() => {
    if (data && data?.length > 0) {
      const tempdata = [];
      for (let i = 0; i < data?.length; i++) {
        for (let k = 0; k < data[i]?.products?.items.length; k++) {
          tempdata.push({
            id: data[i]?.easyId,
            masqomatId: data[i]?.id,
            location: data[i]?.description,
            company: data[i]?.reseller?.companyName,
            onlineStatus: data[i]?.online ? "online" : "offline",
            availableMasks: `${data[i]?.products?.items[k]?.stock}/208`,
            priceNetto: `${data[i]?.products?.items[k]?.priceNetto}`,
            profitShare: `${data[i]?.products?.items[k]?.profitShare}`,
            productId: `${data[i]?.products?.items[k]?.id}`,
            name: `${data[i]?.products?.items[k]?.name}`,
          });
        }
      }
      setloader(false);
      setVending(tempdata);
    }
  }, [data, new1]);

  const getListOrder = () => {
    API.graphql(graphqlOperation(listOrders)).then((res) => {
      setVending((prev) => {
        let temp = prev ? [...prev] : [];
        for (let i = 0; i < temp?.length; i++) {
          temp[i].monthlySales = res?.data?.listOrders?.items.filter(
            (item) => temp[i]?.masqomatId === item?.masqomat?.id
          ).length;
        }
        return temp;
      });
    });
  };

  useEffect(() => {
    getListOrder();
  }, [new1]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        setUser(false);
      });
  }, [AuthState]);

  const changeMoney = async (id, priceNetto, profitShare) => {
    await API.graphql(
      graphqlOperation(UpdateOrders, { input: { id, priceNetto, profitShare } })
    );
  };

  useEffect(() => {
    let onUpdate = API.graphql(graphqlOperation(onUpdateProduct)).subscribe({
      next: (createUserData) => {
        setVending((prevState) => {
          let temp = [...prevState];
          for (let i = 0; i < prevState.length; i++) {
            if (
              temp[i]?.masqomatId ===
              createUserData?.value?.data?.onUpdateProduct?.masqomat?.id
            ) {
              temp[i].priceNetto =
                createUserData?.value?.data?.onUpdateProduct?.priceNetto;
              temp[i].profitShare =
                createUserData?.value?.data?.onUpdateProduct?.profitShare;
              return temp;
            }
          }
        });
      },
    });
  }, []);

  const CreateUserMethod = (input) => {
    setloader(true);
    API.graphql(graphqlOperation(createUser, { input: input }))

      .then((res1) => {
        setverified(res1?.data?.createMasqomatUser);
        setloader(false);
      })
      .catch((err1) => {
        setloader(false);
      });
  };

  useEffect(() => {
    if (user) {
      setloader(true);
      API.graphql(
        graphqlOperation(getMasqomatUser, { id: user?.attributes?.sub })
      )
        .then((res1) => {
          setverified(res1?.data?.getMasqomatUser);
          setloader(false);
          for (
            let i = 0;
            i < res1?.data?.getMasqomatUser?.masqomats?.length;
            i++
          ) {
            getData(res1?.data?.getMasqomatUser?.masqomats[i]);
          }
        })
        .catch((err1) => {
          setloader(false);
        });
    }
  }, [user]);

  if (loader)
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  if (user?.attributes?.sub) {
    if (verified !== "loading" && verified)
      return (
        <div className="App">
          <div className="container">
            <Navbar selectNav={selectNav} />
            {navselection === "machine" ? (
              <MachinePage
                vending={vending}
                onlineList={onlineList}
                oflineList={offlineList}
                ListOrder={ListOrder}
              />
            ) : (
              <MoneyPage changeMoney={changeMoney} data={vending} />
            )}
          </div>
        </div>
      );
    else
      return (
        <Form
          CreateUser={CreateUserMethod}
          setverified={setverified}
          userId={user?.attributes?.sub}
          username={user?.username}
        />
      );
  } else
    return (
      <div className="authentication-page">
        <AmplifyAuthenticator>
          <AmplifySignIn slot="sign-in" usernameAlias="email" hideSignUp>
            <div slot="secondary-footer-content"></div>
          </AmplifySignIn>
        </AmplifyAuthenticator>
      </div>
    );
};

export default withAuthenticator(AuthStateApp);
