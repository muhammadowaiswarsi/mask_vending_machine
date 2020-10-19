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
import { getMaskUser, getResellers, listOrders } from "./graphql/queries";
import { UpdateOrders } from "./graphql/mutation";
import { onUpdateProduct } from "./graphql/subsciption";
import Form from "./components/Form/form";
import Loader from "react-spinners/ClipLoader";

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
  const [verified, setverified] = useState(false);
  const [loader, setloader] = useState(false);

  const selectNav = (data) => {
    setnavselection(data);
  };

  const APICalling = async (masqomatEasyId, masqomatId) => {
    try {
      const uniqClientId = Date.now().toString() + masqomatId;
      const result = await API.post("orderlambda", "/status", {
        body: {
          masqomatEasyId: masqomatEasyId,
          clientId: uniqClientId,
        },
      });

      if (result?.toLowerCase() === "online") {
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
  useEffect(() => {
    APICalling();
  }, [user]);

  const getData = async (id) => {
    API.graphql(graphqlOperation(getResellers, { id }))
      .then((res) => {
        console.log(res?.data?.listMasqomats);
        let temp = res?.data?.listMasqomats?.items;
        let tempData = data ? [...data] : [];
        for (let j = 0; j < temp.length; j++) {
          APICalling(temp[j]?.easyId, temp[j]?.id).then((res) => {
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
            tempData.push(temp);
            if(j === temp.length -1)
            {
              setnew(!new1);
              setData(tempData);
            }
          });
        }
      })
      .catch((err) => {
        console.log(err?.response);
      });
  };

  useEffect(() => {
    const tempdata = [];
    for (let i = 0; i < data?.length; i++) {
      for (let j = 0; j < data[i]?.masqomats?.items.length; j++) {
        for (
          let k = 0;
          k < data[i]?.masqomats?.items[j].products?.items.length;
          k++
        ) {
          tempdata.push({
            id: data[i]?.masqomats?.items[j]?.easyId,
            masqomatId: data[i]?.masqomats?.items[j]?.id,
            location: data[i]?.masqomats?.items[j]?.description,
            company: data[i]?.masqomats?.items[j]?.reseller?.companyName,
            onlineStatus: data[i]?.masqomats?.items[j]?.online
              ? "online"
              : "offline",
            availableMasks: `${data[i]?.masqomats?.items[j]?.products?.items[k]?.stock}/208`,
            priceNetto: `${data[i]?.masqomats?.items[j]?.products?.items[k]?.priceNetto}`,
            profitShare: `${data[i]?.masqomats?.items[j]?.products?.items[k]?.profitShare}`,
            productId: `${data[i]?.masqomats?.items[j]?.products?.items[k]?.id}`,
            name: `${data[i]?.masqomats?.items[j]?.products?.items[k]?.name}`,
          });
        }
      }
    }
    setVending(tempdata);
  }, [data, new1]);

  const getListOrder = () => {
    API.graphql(graphqlOperation(listOrders)).then((res) => {
      console.log("abc");
      setVending((prev) => {
        let temp = [...prev];
        for (let i = 0; i < temp?.length; i++) {
          temp[i].monthlySales = res?.data?.listOrders?.items.filter(
            (item) => temp[i]?.masqomatId === item?.masqomat?.id
          ).length;
        }
        return temp;
      });
    });
  };
  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    getListOrder();
  }, [new1]);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((err) => {
        setUser(false);
      });
  }, [AuthState]);

  const changeMoney = (id, priceNetto, profitShare) => {
    API.graphql(
      graphqlOperation(UpdateOrders, { input: { id, priceNetto, profitShare } })
    );
  };

  useEffect(() => {
    let onUpdate = API.graphql(graphqlOperation(onUpdateProduct)).subscribe({
      next: (createUserData) => {
        setVending((prevState) => {
          let temp = [...prevState];
          for (let i = 0; i < prevState.length; i++) {
            console.log(
              temp[i]?.masqomatId,
              createUserData?.value?.data?.onUpdateProduct?.masqomat?.id
            );
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
        console.log(createUserData?.value?.data?.onUpdateProduct);
      },
    });
  }, []);
  useEffect(() => {
    if (user) {
      setloader(true);
      API.graphql(graphqlOperation(getMaskUser, { id: user?.attributes?.sub }))
        .then((res) => {
          console.log(res);
          setverified(res?.data?.getMaskUser);
          for (let i = 0; i < res?.data?.getMaskUser?.masqomats.length; i++) {
            getData(res?.data?.getMaskUser?.masqomats[i]);
            console.log(res?.data);
            setnew(!new1);
          }
          setloader(false);
        })
        .catch((err) => {
          console.log(err);
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
    if (verified)
      return (
        <div className="App">
          <div className="container">
            <Navbar selectNav={selectNav} />
            {navselection === "machine" ? (
              <MachinePage
                vending={vending}
                onlineList={onlineList}
                oflineList={offlineList}
                data={data}
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
