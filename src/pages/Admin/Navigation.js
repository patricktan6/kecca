import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/admin">
          KECCA
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/attendance">
                Attendance Taking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/request">
                Request
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/members">
                Members Info
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
