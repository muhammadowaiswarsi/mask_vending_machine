import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";
import "./form.css";
const Form = ({ CreateUser, userId, username, setverified }) => {
  const [email, setemail] = useState("");
  const [mobNumber, setmobNumber] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const input = {
      user_id: userId,
      userName: username,
      email: email,
      masqomats: [],
    };
    if (mobNumber) input["phoneNumber"] = mobNumber;

    // CreateUser(input);
    API.graphql(
      graphqlOperation(CreateUser, {
        input,
      })
    )
      .then((res) => {
        console.log(res);
        setverified(res?.data?.createMaskUser)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form-main-Div">
      <div className="form-div">
        <p className="form-main-heading">Create Account</p>
        <form onSubmit={onSubmit} className="form">
          <div className="lines">
            <label className="label" htmlFor="first_name">
              Username
            </label>
            <input
              className="input"
              disabled
              value={username}
              placeholder="First Name"
              name="first_name"
              type="text"
            />
          </div>
          <div className="lines">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Email"
              name="email"
              type="email"
            />
          </div>
          <div className="lines">
            <label className="label" htmlFor="mobile_number">
              Mobile Number
            </label>
            <input
              className="input"
              value={mobNumber}
              onChange={(e) => {
                if (mobNumber === "") setmobNumber(`+${e.target.value}`);
                else setmobNumber(e.target.value);
              }}
              placeholder="Mobile Number"
              name="mobile_number"
              type="text"
            />
          </div>
          <div className="lines">
            <input className="submit" value="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
