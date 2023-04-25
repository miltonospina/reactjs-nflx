import "./App.css";
import React, { useState } from "react";
import MovieListPage from "./pages/MovieListPage";
import MovieContext from "./context";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
      <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
        <MovieListPage/>
      </MovieContext.Provider>
  );
}

export default App;
