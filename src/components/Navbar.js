import React, { Component } from "react";

const Navbar = props => {
  let { getLocation } = props;
  return (
    <div className="nav">
      <div>
        <h3 onClick={() => getLocation()}>AirQ Monitor</h3>
      </div>
      <div />
    </div>
  );
};
export default Navbar;
//{//<p>Index Table</p>}
