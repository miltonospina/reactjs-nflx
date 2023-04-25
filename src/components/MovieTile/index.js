import React, { useContext } from "react";
import "./style.scss";
import MovieContext from '../../context';


const DEFAULT_IMAGE_URL = "pics/no-found.jpg";
export function MovieTile({
  imageUrl,
  title,
  releaseYear,
  genres,
  movieInfo = { imageUrl, title, releaseYear, genres },
  onTileClick,
}) {

  const { setSelectedMovie } = useContext(MovieContext);


  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = DEFAULT_IMAGE_URL;
  };

  function handleClick() {
    setSelectedMovie(movieInfo);
  }

  return (
    <div className="movie-tile" onClick={onTileClick}>
      <img
        src={movieInfo.poster_path}
        alt={movieInfo.name}
        onError={handleImageError}
        className="movie-image"
        onClick={handleClick}
      />
      <div className="movie-details">
        <h3 className="movie-title" onClick={handleClick}>{movieInfo.title}</h3>
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
