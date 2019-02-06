import React, { Component } from "react";

const Pollutants = props => {
  let { polluts } = props;
  let co;
  let h;
  let no2;
  let o3;
  let p;
  let temp;
  let time;
  let t;
  if (polluts) {
    co = polluts.co.v;
    h = polluts.h.v;
    t = polluts.t.v;
    no2 = polluts.no2.v;
    o3 = polluts.o3.v;
    p = polluts.p.v;
    temp = polluts.t.v;
  } else {
    co = "..";
    h = "..";
    no2 = "..";
    o3 = "..";
    p = "..";
    t = "..";
    time = "..";
  }
  return (
    <div className="poll">
      <div className="polluts">
        <div className="pol-item">
          <p>Carbon Dioxide</p>
          <h4>{co}</h4>
        </div>
        <div className="pol-item">
          <p>Temperature (C) </p>
          <h4>{t}</h4>
        </div>
        <div className="pol-item">
          <p>Ozone (o3)</p>
          <h4>{o3}</h4>
        </div>
        <div className="pol-item">
          <p>Nitrogen Dioxide</p>
          <h4>{no2}</h4>
        </div>
      </div>
    </div>
  );
};
export default Pollutants;
