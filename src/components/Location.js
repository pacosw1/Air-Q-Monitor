import React, { Component } from "react";

const Location = props => {
  let { data } = props;
  let city;
  if (data.city) {
    city = data.city.name;
  } else city = "Search for any city above";

  return (
    <div className="location">
      <h3 id="city">{city}</h3>
    </div>
  );
};
export default Location;
