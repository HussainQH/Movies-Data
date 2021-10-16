import React from "react";

import MoviesItem from "./MoviesItem";
import movies from "../movies";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

function MoviesList(props) {
  const movieList = movies.map((movie) => (
    <MoviesItem movie={movie} key={movie.id} setInfo={props.setInfo} />
  ));

  return <div className="row">{movieList}</div>;
}

export default MoviesList;
