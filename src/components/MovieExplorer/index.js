import React from "react";
import MovieTile from "../MovieTile";
import "./style.scss";

function MovieExplorer({ movies }) {
  return (
    <>
      <div className="movie-explorer grid-container" data-testid="search-results">
        {movies.map((movieInfo) => (
          <MovieTile key={movieInfo.id} movieInfo={movieInfo} className="grid-item"></MovieTile>
        ))}
      </div>
    </>
  );
}

export default MovieExplorer;
