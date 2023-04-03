import React from "react";
import './styles.css';

export function GenreSelect({ genres, selected, onSelect }) {


  const select = (choice) => {
    onSelect(choice);
  };
  return (
    <ul>
      {genres.map((genre) => (
        <li
          key={genre}
          className={genre === selected ? "selected" : ""}
          onClick={() => select(genre)}
          data-testid="genre"
        >
          {genre}
        </li>
      ))}
    </ul>
  );
}

export default GenreSelect;