import React, { useState, useEffect, useRef, useContext } from "react";
import axios, { CancelToken, isCancel } from "axios";

import MovieContext from "../../context";

import { GenreSelect } from "../../components/GenreSelect";
import { Searchbar } from "../../components/Searchbar";
import MovieExplorer from "../../components/MovieExplorer";
import { SortControl } from "../../components/SortControl";
import MovieDetails from "../../components/MovieDetails";

const ENDPOINT_URL = "http://localhost:4000/movies";

const MovieListPage = ({
  initialQuery = "",
  initialSortCriteria = { sortBy: "title", sortOrder: "asc" },
  initialActiveGenre = "All",
  initialMovieList = [],
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [sortCriteria, setSortCriteria] = useState(initialSortCriteria);
  const [activeGenre, setActiveGenre] = useState(initialActiveGenre);
  const [movieList, setMovieList] = useState(initialMovieList);

  const { selectedMovie } = useContext(MovieContext);

  const genres = ["All", "Documentary", "Horror", "Crime"];

  const cancelTokenSourceRef = useRef();

  useEffect(() => {
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel(
        "Request cancelled due to new request"
      );
    }

    cancelTokenSourceRef.current = CancelToken.source();

    const search = searchQuery.length > 0 ? searchQuery : undefined;
    const filter = activeGenre !== "All" ? activeGenre : undefined;
    const searchBy = activeGenre !== "All" ? "genre" : "title";

    axios
      .get(ENDPOINT_URL, {
        params: {
          sortBy: sortCriteria.sortBy,
          sortOrder: sortCriteria.sortOrder,
          searchBy,
          search,
          filter,
        },
        cancelToken: cancelTokenSourceRef.current.token,
      })
      .then((response) => setMovieList(response.data.data))
      .catch((error) => {
        if (!isCancel(error)) {
          console.log(error);
        }
      });
    return () => {
      if (cancelTokenSourceRef.current) {
        cancelTokenSourceRef.current.cancel(
          "Request cancelled due to component unmount or effect re-run"
        );
      }
    };
  }, [searchQuery, activeGenre, sortCriteria]);

  return (
    <>
      <header>
        <div className="top-row">
        <p>netflixRoulette</p>
        <p>...</p>
        </div>
        
        {selectedMovie === null ? (
          <div className="search-block">
            <h2>Find your movie</h2>
            <Searchbar
              initial=""
              onSearch={setSearchQuery}
              className="search-bar"
            />
          </div>
        ) : (
          <MovieDetails />
        )}
      </header>
      <article>
        <div className="filter-row">
          <GenreSelect
            genres={genres}
            selected={activeGenre}
            onSelect={setActiveGenre}
          />
          <SortControl
            currentSelection={sortCriteria}
            onChange={setSortCriteria}
          />
        </div>
        <div>
          <MovieExplorer movies={movieList} />
        </div>
      </article>
    </>
  );
};

export default MovieListPage;
