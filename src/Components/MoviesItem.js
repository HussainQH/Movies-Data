import React from "react";

const MoviesItem = (props) => {
  const movie = props.movie;

  return (
    <div className="card p-2 m-4 col-lg-3 col-sm-12">
      <img
        className="card-img-top"
        className="poster"
        alt={movie.title}
        src={movie.poster}
      />
      <div class="p-2 card-text text-small">
        <h5>{movie.title}</h5>
        <footer className="card-footer text-muted">{movie.genres}</footer>
      </div>
    </div>
  );
};

export default MoviesItem;
