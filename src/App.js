import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Counters from "./components/Counter/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  render() {
    const { counters } = this.state;

    return (
      <div className="App">
        <Navbar />
        <Counters counters={counters} />
      </div>
    );
  }
}

export default App;
