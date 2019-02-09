import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import Index from "./components/Index";
import Pollutants from "./components/Pollutants";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.getLocation = this.getLocation.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.updateKeyword = this.updateKeyword.bind(this);
    this.updateCity = this.updateCity.bind(this);
    //this.getGeo = this.getGeo.bind(this);

    this.state = {
      data: "",
      searchData: []
    };
  }

  updateKeyword(name) {
    this.setState({
      keyword: name
    });
  }

  updateSearch(keyword) {
    let token = "31a30e0092bce41c286e9b790c6be1e072eb0c69";
    console.log("running");

    fetch(
      "https://api.waqi.info/search/?token=" + token + "&keyword=" + keyword
    ).then(response => {
      response.json().then(res => {
        let data = res.data;
        let exists = data.find(item => item.station.name === keyword);
        if (exists) {
          let lat = exists.station.geo[0];
          let long = exists.station.geo[1];
          this.updateCity(lat, long);
        }
        this.setState({
          searchData: data
        });
      });
    });
  }

  updateCity(lat, long) {
    if (lat && long) {
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
    }
  }

  getLocation() {
    var getLocation;
    let lat;
    let long;
    navigator.geolocation.getCurrentPosition(loc => {
      lat = loc.coords.latitude;
      long = loc.coords.longitude;

      this.updateCity(lat, long);
    });
    //console.log(loc.coords.longitude);
  }

  render() {
    let res;
    let { getLocation, updateSearch } = this;
    let { data, searchData, exists } = this.state;

    if (data === "") {
      getLocation();
    }

    return (
      <div className="App">
        <Navbar getLocation={getLocation} />
        <Search searchData={searchData} updateSearch={updateSearch} />
        <Location data={data} />
        <Index data={data} />
      </div>
    );
  }
}

export default App;
