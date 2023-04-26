import "./App.css";
import React, { useState } from "react";
import MovieListPage from "./pages/MovieListPage";
import MovieContext from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
      <MovieContext.Provider value={{ selectedMovie, setSelectedMovie }}>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MovieListPage/>}/>
        </Routes>
        </BrowserRouter>
      </MovieContext.Provider>
  );
}

export default App;
