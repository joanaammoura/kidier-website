import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <div className="search">
      <input className="search__searchhInput" type="text" />
      <SearchIcon className="search__searchIcon" />
    </div>
  );
}

export default Search;
