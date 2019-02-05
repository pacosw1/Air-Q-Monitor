import React, { Component } from "react";

const Index = props => {
  return (
    <div className="index">
      <div>
        <h4>Air Quality Index</h4>
        <h1>50</h1>
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
