import React, { useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Search from "./Search";
import { useDispatch } from "react-redux";
import { fectMovieSearch, fetchMoviesRedux } from "../Store/payload";
import { Route, Routes } from "react-router-dom";
import Details from "./Movies/Details";
import Movies from "./Movies";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesRedux());
  }, [dispatch]);

  const search = (searchValue) => {
    dispatch(fectMovieSearch(searchValue));
  };

  return (
    <div className="App">
      <div className="Nav">
        <Header text="RND Movies" />
        <Search search={search} />
      </div>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route exact path="/movie:id/" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
