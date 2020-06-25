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

  return (
    <div className="bg">
      <div className="login-box">
        <h1>KECCA</h1>
        <form onSubmit={handleSignIn}>
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
            <input name="email" type="email" placeholder="Email" />
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
            <input name="password" type="password" placeholder="Password" />
          </div>
          <button className="btn" type="submit">
            Sign In
          </button>
        </form>
        <p>
          New to KECCA?{" "}
          <a href="/signup" style={{ color: "black" }}>
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
