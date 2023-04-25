import React from "react";
import "./styles.scss";

export function SortControl({ currentSelection, onChange }) {
  const handleSelectChange = (event) => {
    onChange({
      ...currentSelection,
      sortBy: event.target.value,
    });
  };

  const handleDirectionChange = () => {
    onChange({
      ...currentSelection,
      sortOrder: currentSelection.sortOrder === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div className="sort-control">
      <label htmlFor="sort-select">Sort by</label>
      <select
        id="sort-select"
        value={currentSelection.sortBy}
        onChange={handleSelectChange}
      >
        <option value="release_date">Release date</option>
        <option value="title">Title</option>
      </select>
      <button className="sort-direction" onClick={handleDirectionChange}>
        {currentSelection.sortOrder === "asc" ? "▲" : "▼"}
      </button>
    </div>
  );
}
