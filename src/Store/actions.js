export const fetchMoviesRequest = () => {
  return {
    type: "SEARCH_MOVIES_REQUEST",
  };
};

export const fetchMoviesSuccess = (payload) => {
  return {
    type: "SEARCH_MOVIES_SUCCESS",
    payload,
  };
};

export const fetchMoviesFailure = (payload) => {
  return {
    type: "SEARCH_MOVIES_FAILURE",
    payload,
  };
};

export const fetchMoviesData = (payload) => {
  return {
    type: "SEARCH_MOVIES_DETAILS",
    payload,
  };
};
