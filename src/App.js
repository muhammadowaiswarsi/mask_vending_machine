import React from "react";
import "./App.css";
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";
import Navbar from "./components/Navbar/Index";
import MachinePage from "./components/MachinePage.js";

Amplify.configure(awsconfig);

const AuthStateApp = () => {
  const [authState, setAuthState] = React.useState();
  const [user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div className="container">

      <Navbar />
      {/* <div>Hello, {user?.attributes?.email}</div> */}
      {/* <AmplifySignOut /> */}
      <MachinePage />
      </div>
    </div>
  ) : (
    <AmplifyAuthenticator />
  );
};

export default AuthStateApp;
