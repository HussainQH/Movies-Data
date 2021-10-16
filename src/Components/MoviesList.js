import React from "react";
import { useState } from "react";
import MoviesItem from "./MoviesItem";
import movies from "../movies";

import NavBar from "./NavBar";

const MoviesList = (props) => {
  const [query, setQuery] = useState("");

  const moviesList = movies

    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .map((movie) => (
      <MoviesItem
        movie={movie}
        key={movie.id}
        setInfo={props.setInfo}
        setRemove={props.setRemove}
      />
    ));

  return (
    <div>
      <div className="sticky-top">
        <NavBar setQuery={setQuery} />
      </div>

      <div className="row ">{moviesList}</div>
    </div>
  );
};

export default MoviesList;
