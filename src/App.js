import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Index from "./components/Index";

class App extends Component {
  constructor(props) {
    this.getLoc = this.getLoc.bind(this);
    this.state = {
      location: ""
    };
  }

  getLoc() {
    var startPos;
  navigator.geolocation.getCurrentPosition(function(position) {
    startPos = position;
    console.log(startPos.coords.latitude);
  }
}

  render() {
    let {getLoc} = props;
    return (
      <div className="App">
      <button onClick={this.getLoc}/>
        <Navbar />
        <Location />
        <Index />
      </div>
    );
  }
}

export default App;
