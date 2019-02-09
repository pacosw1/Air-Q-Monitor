import React, { Component } from "react";

const Pollutants = props => {
  let { polluts } = props;
  let co = "..";
  let no2 = "..";
  let o3 = "..";
  let temp = "..";

  if (polluts) {
    if (polluts.co) co = polluts.co.v;
    if (polluts.no2) no2 = polluts.no2.v;
    if (polluts.o3) o3 = polluts.o3.v;
    if (polluts.t) temp = polluts.t.v;
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
          <h4>{temp}</h4>
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
