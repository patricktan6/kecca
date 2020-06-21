import React, { useContext, useCallback } from "react";
import { withRouter, Redirect } from "react-router";
import fire from "../config/Fire";
import AuthContext from "../Auth";
import "../style/SignIn.css";

const SignIn = ({ history }) => {
  const handleSignIn = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await fire
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
  // I don't know where to put the onSubmit handler need your help!!
  return (
    <form onSubmit={handleSignIn}>
      <div className="bg">
        <div className="login-box">
          <h1>Login</h1>
          <div className="textbox">
            <svg
              class="bi bi-person-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            <input type="text" placeholder="Email" />
          </div>
          <div className="textbox">
            <svg
              class="bi bi-lock-fill"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="11" height="9" x="2.5" y="7" rx="2" />
              <path
                fill-rule="evenodd"
                d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"
              />
            </svg>
            <input type="password" placeholder="Password" />
          </div>
          <input className="btn" type="button" value="Sign In" />
        </div>
      </div>
    </form>
  );
};

export default withRouter(SignIn);

{
  /* <div>
<h1 className="header">Sign In</h1>
<form onSubmit={handleSignIn}>
  <label>
    Email address:
    <input name="email" type="email" placeholder="Email address" />
  </label>
  <label>
    Password:
    <input name="password" type="password" placeholder="Password" />
  </label>
  <button type="submit">Sign In</button>
</form>
</div> */
}

{
  /* <div className="container-fluid bg">
<div className="row">
  <div className="col-md-4 col-sm-4 col-xs-12"></div>
  <div className="col-md-4 col-sm-4 col-xs-12">
    <form className="formTextColor formContainer" onSubmit={handleSignIn}>
      <h1 className="headerSignIn">Sign In</h1>
      <div class="form-group">
        <label for="emailAddressSignIn">Email</label>
        <input
          type="email"
          class="form-control"
          id="emailAddressSignIn"
          aria-describedby="emailHelp"
          placeholder="Email Address"
        />
      </div>
      <div class="form-group">
        <label for="passwordSignIn">Password</label>
        <input
          type="password"
          class="form-control"
          id="passwordSignIn"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-success btn-block">
        Sign In
      </button>
    </form>
  </div>
  <div className="col-md-4 col-sm-4 col-xs-12"></div>
</div>
</div> */
}
