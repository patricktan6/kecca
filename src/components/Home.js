import React, { Component } from "react";
import fire from "../config/Fire";
import Navigation from "./Navigation";

class Home extends Component {
  render() {
    console.log(fire.auth().uid, "logging");
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome to KECCA</h1>
        <Navigation />
        <hr />
        <h1>Home</h1>
        <button onClick={() => fire.auth().signOut()}>Sign Out</button>
      </div>
    );
  }
}

export default Home;
