import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Index from "./components/Index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Location />
        <Index />
      </div>
    );
  }
}

export default App;
