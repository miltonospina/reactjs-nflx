import React, { useContext } from "react";
import "./style.scss";
import MovieContext from '../../context';

const DEFAULT_IMAGE_URL = "pics/no-found.jpg";

const MovieDetails = () => {

  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = DEFAULT_IMAGE_URL;
  };
  return (
    <div className="movie-details-row">
      <img
        src={selectedMovie.poster_path}
        alt={selectedMovie.title}
        onError={handleImageError}
        className="movie-image"
      />
      <div className="movie-info">
        <div className="movie-title">
          <h3>{selectedMovie.title}</h3>
          <span className="movie-rating">{selectedMovie.vote_average}</span>
        </div>
        <p className="movie-genres">{selectedMovie.genres.map(g =>(<span>{g}</span>))}</p>
        <p className="movie-extra-info">
          <span className="movie-release-date">{selectedMovie.release_date}</span>
          <span className="movie-runtime">{selectedMovie.runtime} min</span>
        </p>
        <p>{selectedMovie.overview}</p>
        <button onClick={() => setSelectedMovie(null)}> close</button>
      </div>
    </div>
  );
};

export default MovieDetails;
