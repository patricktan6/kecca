import React, { Component } from "react";
import Event from "./Event";

class Attendance extends Component {
  render() {
    return (
      <div>
        <h1>Attendance</h1>
        <div>
          <h2>Create Event</h2>
          <Event />
        </div>
      </div>
    );
  }
}

export default Attendance;
