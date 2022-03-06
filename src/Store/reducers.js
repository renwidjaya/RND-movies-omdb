const initialState = {
  loading: true,
  movies: [],
  details: [],
  errorMessage: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    case "SEARCH_MOVIES_DETAILS":
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
