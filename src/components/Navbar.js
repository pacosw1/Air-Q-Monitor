import React, { Component } from "react";

const Navbar = props => {
  let { getLocation } = props;
  return (
    <div className="nav">
      <div>
        <h3 onClick={() => getLocation()}>AirQ Monitor</h3>
      </div>
      <div>
        <p>Index Table</p>
      </div>
    </div>
  );
};
export default Navbar;
