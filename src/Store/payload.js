import {
  fetchMoviesData,
  fetchMoviesFailure,
  fetchMoviesRequest,
  fetchMoviesSuccess,
} from "./actions";

const API_KEY = "70837f0a";

const MOVIE_API_URL = `https://www.omdbapi.com/?s=man&apikey=${API_KEY}`;

export const fetchMoviesRedux = () => {
  return async (dispatch) => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(fetchMoviesSuccess(jsonResponse.Search));
      });
  };
};

export const fectMovieSearch = (value) => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    fetch(`https://www.omdbapi.com/?s=${value}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch(fetchMoviesSuccess(jsonResponse.Search));
        } else {
          dispatch(fetchMoviesFailure(jsonResponse.Error));
        }
      });
  };
};

export const fectMovieDetails = (value) => {
  return async (dispatch) => {
    dispatch(fetchMoviesRequest());
    fetch(`https://www.omdbapi.com/?t=${value}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch(fetchMoviesData(jsonResponse));
      });
  };
};
