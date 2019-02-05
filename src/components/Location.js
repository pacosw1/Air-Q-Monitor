import React, { Component } from "react";

const Location = props => {
  let { data } = props;
  let city;
  if (data.city) {
    city = data.city.name;
  } else {
    city = "loading";
  }
  return (
    <div className="location">
      <h3>{city}</h3>
    </div>
  );
};
export default Location;
