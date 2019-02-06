import React, { Component } from "react";
import Pollutants from "./Pollutants";

const Index = props => {
  let index;
  let polluts;

  let { data } = props;
  if (data.aqi) {
    index = data.aqi;
    polluts = data.iaqi;
  } else index = "loading...";
  return (
    <div className="index">
      <Layout />
      <Pollutants polluts={polluts} />
    </div>
  );
};
export default Index;

const Layout = props => {
  return (
    <div className="layout">
      <h4 className="header">Air Quality Index</h4>
      <div className="lay-content">
        <div className="lay-content-item ind">
          <h1>98</h1>
        </div>
        <div className="lay-content-item desc">
          <p>Air quality is good enough for you not to have to worry.</p>
        </div>
      </div>
    </div>
  );
};
