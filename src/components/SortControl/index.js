import React from "react";

export function SortControl({ currentSelection, onChange }) {
  const handleSelectChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="sort-control">
      <label htmlFor="sort-select">Sort by</label>
      <select
        id="sort-select"
        value={currentSelection}
        onChange={handleSelectChange}
      >
        <option value="releaseYear">Release date</option>
        <option value="name">Title</option>
      </select>
    </div>
  );
}
