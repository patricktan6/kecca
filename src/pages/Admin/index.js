import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import AttendanceMarking from "./AttendanceMarking";
import Home from "./Home";
import Request from "./Request";
import MembersInfo from "./MembersInfo";
import Contact from "./Contact";

const Admin = () => {
  console.log("hi");
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/admin/home" component={Home} exact />
          <Route path="/admin/attendance" component={AttendanceMarking} />
          <Route path="/admin/request" component={Request} />
          <Route path="/admin/members" component={MembersInfo} />
          <Route path="/admin/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default Admin;
