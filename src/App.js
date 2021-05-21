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

  handleIncrement = (counterRecord) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counterRecord);
    counters[index] = { ...counterRecord };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counterRecord) => {
    console.log("Decrement Clicked!: ", counterRecord);
  };

  handleDelete = (counterRecord) => {
    console.log("Delete Clicked!: ", counterRecord);
  };

  handleReset = () => {
    console.log("Reset Clicked");
  };

  render() {
    const { counters } = this.state;

    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <button onClick={this.handleReset} className="btn btn-primary">
            Reset
          </button>
          <Counters
            counters={counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
