import React from "react";
import { useDispatch } from "react-redux";
import { fectMovieDetails } from "../../Store/payload";
import { useNavigate, Outlet } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

  const handleDetails = (name) => {
    dispatch(fectMovieDetails(name));
    navigate(`movie + ${name}`);
  };

  return (
    <div className="movie">
      <p onClick={() => handleDetails(movie.Title)}>{movie.Title}</p>
      <div>
        <img
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default MovieCard;
