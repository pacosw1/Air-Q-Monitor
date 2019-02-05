import React, { Component } from "react";

const Index = props => {
  let index;
  let { data } = props;
  if (data.aqi) {
    index = data.aqi;
  }
  return (
    <div className="index">
      <div>
        <h4>Air Quality Index</h4>
        <h1>{index}</h1>
      </div>
      <div>
        <h4>Air Quality</h4>
        <h3>Good</h3>
      </div>
      <div id="desc">
        <p>Air quality is good enough for you not to have to worry</p>
      </div>
    </div>
  );
};
export default Index;
