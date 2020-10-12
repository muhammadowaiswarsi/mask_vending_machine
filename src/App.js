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

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();
  const [navselection, setnavselection] = useState("machine");
  const [data, setData] = useState(null);
  const [vending, setVending] = useState();
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
    console.log("hello world new world");
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
            location: data[i]?.masqomats?.items[j]?.description,
            company: data[i]?.masqomats?.items[j]?.reseller?.companyName,
            onlineStatus: data[i]?.masqomats?.items[j]?.online
              ? "online"
              : "offline",
            availableMasks: `${data[i]?.masqomats?.items[j]?.products?.items[k]?.stock}/208`,
            monthlySales: 353,
          });
        }
      }
    }
    console.log(tempdata, "tempdata");
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
            <MoneyPage />
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
