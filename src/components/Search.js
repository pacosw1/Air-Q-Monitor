import React, { Component } from "react";

const Search = props => {
  let { updateSearch, searchData } = props;
  let results;
  if (searchData.length > 1) {
    results = searchData.map(station => {
      return (
        <option className="option" key={station.uid}>
          {station.station.name}
        </option>
      );
    });
  }
  return (
    <div className="search">
      <input
        list="results"
        onChange={e => updateSearch(e.target.value)}
        placeholder="Search for a city"
      />
      <datalist id="results">{results}</datalist>
    </div>
  );
};
export default Search;
