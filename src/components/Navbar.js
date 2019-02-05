import React, { Component } from "react";

const Navbar = props => {
  let { getLocation } = props;
  return (
    <div className="nav">
      <div>
        <h3 onClick={() => getLocation()}>AirQ Monitor</h3>
      </div>
      <div>
        <p>Search</p>
        <p>Index</p>
        <p>About</p>
      </div>
    </div>
  );
};
export default Navbar;
