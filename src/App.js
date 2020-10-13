import React, { useEffect, useState } from "react";
import "./App.css";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifyForgotPassword,
  AmplifyConfirmSignIn,
} from "@aws-amplify/ui-react";
import { AuthState } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Navbar from "./components/Navbar/Index";
import MachinePage from "./components/MachinePage/index.js";
import MoneyPage from "./components/MoneyPage";
import { getResellers, listOrders } from "./graphql/queries";
import { UpdateOrders } from "./graphql/mutation";
import { onUpdateProduct } from "./graphql/subsciption";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [navselection, setnavselection] = useState("machine");
  const [data, setData] = useState(false);
  const [vending, setVending] = useState(false);
  const [onlineList, setOnlineList] = useState(false);
  const [offlineList, setOfflineList] = useState(false);
  const [new1, setnew] = useState(false);

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

  const getData = async () => {
    API.graphql(graphqlOperation(getResellers))
      .then((res) => {
        let temp = res?.data?.listResellers?.items;
        setData(temp);
        for (let i = 0; i < temp.length; i++) {
          for (let j = 0; j < temp[i]?.masqomats?.items?.length; j++) {
            APICalling(
              temp[i]?.masqomats?.items[j]?.easyId,
              temp[i]?.masqomats?.items[j]?.id
            ).then((res) => {
              temp[i].masqomats.items[j].online = true;
              if (res) {
                let temp1 = onlineList ? [...onlineList] : [];
                temp1.push(temp);
                setOnlineList(temp1);
              } else {
                let temp2 = offlineList ? [...offlineList] : [];
                temp2.push(temp);
                setOfflineList(temp2);
              }
              setnew(!new1);
              setData(temp);
            });
          }
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
            monthlySales: 353,
          });
        }
      }
    }
    setVending(tempdata);
  }, [data, new1]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((res) => {
        setUser(res.attributes);
      })
      .catch((err) => {
        setUser(false);
      });
  }, []);

  const changeMoney = (id, priceNetto, profitShare) => {
    API.graphql(
      graphqlOperation(UpdateOrders, { input: { id, priceNetto, profitShare } })
    )
  };

  useEffect(() => {
    let onUpdate = API.graphql(graphqlOperation(onUpdateProduct)).subscribe({
      next: (createUserData) => {
        setVending(prevState => {
          let temp = [...prevState];
          for (let i = 0; i < prevState.length; i++) {
            console.log(temp[i]?.masqomatId,createUserData?.value?.data?.onUpdateProduct?.masqomat?.id )
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
          })
        console.log(createUserData?.value?.data?.onUpdateProduct);
      },
    });
  }, []);

  if (user?.sub)
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
            />
          ) : (
            <MoneyPage changeMoney={changeMoney} data={vending} />
          )}
        </div>
      </div>
    );
  return (
    <div className="authentication-page">
      <AmplifyAuthenticator>
        <AmplifySignIn slot="sign-in" hideSignUp />
      </AmplifyAuthenticator>
    </div>
  );
};

export default AuthStateApp;
