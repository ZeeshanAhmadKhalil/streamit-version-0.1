import React from "react";

import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search-bar-container">
      {/* <div className="search-icon">
        <FaSearch />
      </div> */}
      {/* <input
        className="search-placeholder"
        type="text"
        placeholder="type here to search......."
      /> */}
    
      <input
        name="q"
        type="text"
        placeholder="Search…"
        value=""
        autocomplete="off"
        maxlength="240"
        className="s-input s-input__search js-search-field search-placeholder"
      ></input>
    </div>
  );
}

export default SearchBar;
