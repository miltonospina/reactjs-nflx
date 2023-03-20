import React, { useState } from "react";

export function Searchbar({ initial, onSearch }) {
  const [searchTerm, setSearchTerm] = useState(initial);

  let placeholder = `What do you want to watch? ${searchTerm}`;

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
      />
      <button onClick={search}>Search</button>
    </div>
  );
}
