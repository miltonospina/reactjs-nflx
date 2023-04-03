import React from "react";

export function MovieTile({
  imageUrl,
  name,
  releaseYear,
  genres,
  movieInfo = { imageUrl, name, releaseYear, genres },
  onTileClick,
  
}) {
  return (
    <div className="movie-tile" onClick={onTileClick}>
      <img
        src={movieInfo.imageUrl}
        alt={movieInfo.name}
        className="movie-image"
      />
      <div className="movie-details">
        <h3 className="movie-title">{movieInfo.name}</h3>
        <p className="movie-release">{movieInfo.releaseYear}</p>
        <ul className="movie-genres">
          {movieInfo.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieTile;
