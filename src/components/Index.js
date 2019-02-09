import React, { Component } from "react";
import Pollutants from "./Pollutants";

const Index = props => {
  let index;
  let polluts;

  let { data } = props;
  if (data.aqi) {
    index = data.aqi;
    polluts = data.iaqi;
  } else index = "...";
  return (
    <div className="index">
      <Layout index={index} />
      <Pollutants polluts={polluts} />
    </div>
  );
};
export default Index;

const Layout = props => {
  let { index } = props;
  let desc = "";
  if (index >= 0 && index <= 50) {
    desc =
      "Air quality is considered satisfactory, and air pollution poses little or no risk";
  } else if (index >= 51 && index <= 100) {
    desc =
      "Air quality is acceptable, sensitive groups should limit outdoor activity";
  } else if (index >= 101 && index <= 150) {
    desc = "Sensitive groups will be affected. Limit outdoor activity";
  } else if (index >= 151 && index <= 200) {
    desc =
      "Everyone may begin to experience health effects Limit prolonged outdoor activity";
  } else if (index >= 201 && index <= 300) {
    desc =
      "Health warnings of emergency conditions. Everyone will be affected.";
  } else {
    desc =
      "Avoid outdoor activity at all costs, use mask to go outside if necessary";
  }

  return (
    <div className="layout">
      <h4 className="header">Air Quality Index</h4>
      <div className="lay-content">
        <div className="lay-content-item ind">
          <h1>{index}</h1>
        </div>
        <div className="lay-content-item desc">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
