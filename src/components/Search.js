import React, { Component } from "react";

const Search = props => {
  let { updateSearch, searchData } = props;
  console.log(searchData);
  let results;
  if (searchData) {
    results = searchData.map(station => {
      return (
        <li key={station.uid}>
          <h5>{station.station.name}</h5>
        </li>
      );
    });
  }
  return (
    <div className="search">
      <input
        onChange={e => updateSearch(e.target.value)}
        placeholder="Search for a city"
      />
      <div className="results">
        <ul>{results}</ul>
      </div>
    </div>
  );
};
export default Search;
