import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Attendance from "./Attendance";
import Home from "./Home";
import Request from "./Request";
import MembersInfo from "./MembersInfo";
import Contact from "./Contact";

const Admin = () => {
  return (
    <Router>
      <div>
        <Navigation />

        <Route path="/admin/home" component={Home} />
        <Route path="/admin/attendance" component={Attendance} />
        <Route path="/admin/request" component={Request} />
        <Route path="/admin/members" component={MembersInfo} />
        <Route path="/admin/contact" component={Contact} />
      </div>
    </Router>
  );
};

export default Admin;
