import React from "react";
import { NavLink } from "react-router-dom";
import fire from "../../config/Fire";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <NavLink className="navbar-brand" to="/admin">
          KECCA <sup>Admin</sup>
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/attendance">
              Attendance Marking
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
        <button
          className="btn btn-outline-success my-2 my-sm-0 ml-auto"
          onClick={() => fire.auth().signOut()}
        >
          Sign Out
        </button>
      </nav>
    );
  }
}

export default Navigation;
