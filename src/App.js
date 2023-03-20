import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import { GenreSelect } from "./components/GenreSelect";
import { Searchbar } from "./components/Searchbar";


function App() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", "Dcumentary", "Comedy", "Horror", "Crime"];
  return (
    <div className="App">
      <div>
        <h2>1. Counter</h2>
        <Counter initial={10} />
      </div>
      <div>
        <h2>2. Searchbar</h2>
        <Searchbar initial="Alien" onSearch={console.log} />
      </div>
      <div>
        <h2>3. GenreSelect: {selectedGenre}</h2>
        <GenreSelect
          genres={genres}
          selected={selectedGenre}
          onSelect={setSelectedGenre}
        />
      </div>
    </div>
  );
}

export default App;
