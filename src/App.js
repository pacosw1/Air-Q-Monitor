import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Index from "./components/Index";

class App extends Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    //this.getGeo = this.getGeo.bind(this);

    this.state = {
      lat: "",
      long: "",
      location: "",
      data: ""
    };
  }

  componentWillMount() {
    this.getLocation();
  }
  getLocation() {
    var getLocation;
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition(loc => {
      lat = loc.coords.latitude;
      long = loc.coords.longitude;

      fetch(
        "https://api.waqi.info/feed/geo:" +
          lat +
          ";" +
          long +
          "/?token=31a30e0092bce41c286e9b790c6be1e072eb0c69"
      ).then(response => {
        response.json().then(data => {
          this.setState({
            data: data.data
          });
        });
      });
      this.setState({
        lat: loc.coords.latitude,
        long: loc.coords.longitude
      });
    });
    //console.log(loc.coords.longitude);
  }

  render() {
    let res;
    let { getLocation } = this;
    let { data } = this.state;
    if (!data) {
      res = <div>hi</div>;
    } else {
      res = (
        <div className="App">
          <Navbar getLocation={getLocation} />
          <Location data={data} />
          <Index data={data} />
        </div>
      );
    }
    return (
      <div className="App">
        <Navbar getLocation={getLocation} />
        <Location data={data} />
        <Index data={data} />
      </div>
    );
  }
}

export default App;
