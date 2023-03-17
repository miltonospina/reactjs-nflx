import React, { useState } from "react";

export function Searchbar({ initial, onSearch }) {
  const [searchTerm, setSearchTerm] = useState(initial);

  const placeholder = "What do you want to watch?";

  const setQuery = (event) => {
    setSearchTerm(event.target.value);
  };

  const search = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      search();
    }
  };

  return (
    <div>
      <input
        type="text"
        name="searchTerm"
        aria-label="Search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={setQuery}
        onKeyDown={handleKeyDown}
      ></input>
      <button onClick={search}>Search</button>
    </div>
  );
}
