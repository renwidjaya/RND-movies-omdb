import "../../App.css";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Details = () => {
  const { details } = useSelector((state) => state);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 card card-body">
          <img src={details.Poster} className="thumbnail" alt="Poster" />
        </div>
        <div className="col-md-8">
          <h2>{details.Title}</h2>
          <ul>
            <li>
              <strong>Genre:</strong> {details.Genre}
            </li>
            <li>
              <strong>Released:</strong> {details.Released}
            </li>
            <li>
              <strong>Rated:</strong> {details.Rated}
            </li>
            <li>
              <strong>IMDB Rating:</strong> {details.imdbRating}
            </li>
            <li>
              <strong>Director:</strong> {details.Director}
            </li>
            <li>
              <strong>Writer:</strong> {details.Writer}
            </li>
            <li>
              <strong>Actors:</strong> {details.Actors}
            </li>
          </ul>

          <Link to="/">Back To Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
