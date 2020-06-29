import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import AuthContext from "../Auth";

const Navigation = () => (
  <div>
    <AuthContext.Consumer>
      {(currentUser) => {
        console.log(currentUser);
        return currentUser ? <NavigationAdmin /> : <NavigationUser />;
      }}
    </AuthContext.Consumer>
  </div>
);

const NavigationUser = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.CCA}>CCA</Link>
    </li>
  </ul>
);

const NavigationAdmin = () => (
  <ul>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
  </ul>
);

export default Navigation;
