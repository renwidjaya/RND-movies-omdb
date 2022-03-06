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
          <h2 className="mb-4">{details.Title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Genre:</strong> {details.Genre}
            </li>
            <li className="list-group-item">
              <strong>Released:</strong> {details.Released}
            </li>
            <li className="list-group-item">
              <strong>Rated:</strong> {details.Rated}
            </li>
            <li className="list-group-item">
              <strong>IMDB Rating:</strong> {details.imdbRating}
            </li>
            <li className="list-group-item">
              <strong>Director:</strong> {details.Director}
            </li>
            <li className="list-group-item">
              <strong>Writer:</strong> {details.Writer}
            </li>
            <li className="list-group-item">
              <strong>Actors:</strong> {details.Actors}
            </li>
          </ul>

          <Link to="/" className="btn">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
