import "./App.css";
import React, { useState } from "react";
import { GenreSelect } from "./components/GenreSelect";
import { Searchbar } from "./components/Searchbar";
import MovieExplorer from "./components/MovieExplorer";
import { SortControl } from "./components/SortControl";

import data from "./data/movies.json";


function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("name");

  const genres = [
    ...new Set(data.reduce((acc, { genres }) => [...acc, ...genres], [])),
    "All",
  ];

  const filteredData = data
    .filter((movie) =>
      selectedGenre === "All" ? true : movie.genres.includes(selectedGenre)
    )
    .filter((movie) =>
      searchTerm.trim() === ""
        ? true
        : movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const orderedData = filteredData.sort((a, b) => {
    if (orderBy === "name") {
      return a.title.localeCompare(b.title);
    } else if (orderBy === "releaseYear") {
      return a.releaseYear - b.releaseYear;
    } else {
      return 0;
    }
  });

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSortChange = (orderBy) => {
    setOrderBy(orderBy);
  };

  return (
    <div className="App">
      <header>
        <h2>Find your movie</h2>
        <Searchbar initial="" onSearch={handleSearch} className="search-bar" />
      </header>
      <article>
        <div className="row">
          <GenreSelect
            genres={genres}
            selected={selectedGenre}
            onSelect={handleGenreSelect}
          />
          <SortControl currentSelection={orderBy} onChange={handleSortChange} />
        </div>
        <div>
          <MovieExplorer movies={orderedData} />
        </div>
      </article>
    </div>
  );
}

export default App;
