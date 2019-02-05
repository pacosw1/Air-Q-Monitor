import React, { Component } from "react";

const Navbar = props => {
  let { getLocation } = props;
  return (
    <div className="nav">
      <div>
        <button onClick={() => getLocation()}>AirQ Monitor</button>
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
