import React, { useState } from "react";
import "./App.css";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Navbar from "./components/Navbar/Index";
import MachinePage from "./components/MachinePage/index.js";
import MoneyPage from "./components/MoneyPage";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();
  const [navselection, setnavselection] = useState("machine");

  const selectNav = (data) => {
    setnavselection(data);
  };

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, [selectNav]);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div className="container">
        <Navbar selectNav={selectNav} />
        {navselection === "machine" ? <MachinePage /> : <MoneyPage />}
      </div>
    </div>
  ) : (
    <div className="authentication-page">
      <AmplifyAuthenticator />
    </div>
  );
};

export default AuthStateApp;
