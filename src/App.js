import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Counters from "./components/Counter/counters";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Counters />
      </div>
    );
  }
}

export default App;
