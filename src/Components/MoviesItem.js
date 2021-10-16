import React from "react";
import DetailsModal from "./DetailsModal";

const MoviesItem = (props) => {
  const movie = props.movie;
  const genre = movie.genres.map((genre) =>
    genre !== genre[genre.length] ? genre + ", " : genre
  );

  return (
    <div className=" card p-2 m-4 col-lg-3 col-sm-12 ">
      <img
        className="card-img-top poster"
        alt={movie.title}
        src={movie.poster}
      />
      <div className="p-2 card-text text-small">
        <h5>{movie.title}</h5>
        <footer className="card-footer text-muted row">Genres: {genre}</footer>

        <DetailsModal
          movie={movie}
          key={movie.id}
          poster={movie.poster}
          overview={movie.overview}
          release_date={movie.release_date}
          genre={genre}
        />
      </div>
    </div>
  );
};

export default MoviesItem;
