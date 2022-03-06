import React, { useEffect } from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesRedux } from "../../Store/payload";
import MovieCard from "./MovieCard";

const Movies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesRedux());
  }, [dispatch]);

  const { movies, errorMessage, loading } = useSelector((state) => state);

  return (
    <div>
      <p className="App-intro">Show Movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span className="loader"></span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <MovieCard key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
