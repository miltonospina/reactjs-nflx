import React, { useState } from "react";
import './styles.css';

export function GenreSelect({ genres, selected, onSelect }) {
    const [selectedGenre, setSelected] = useState(selected);

  const select = (choice) => {
    setSelected(choice);
    onSelect(choice);
  };
  return (
    <ul>
      {genres.map((genre) => (
        <li
          key={genre}
          className={genre === selectedGenre ? "selected" : ""}
          onClick={() => select(genre)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
}
