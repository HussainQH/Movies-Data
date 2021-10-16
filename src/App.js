import "./App.css";
import { useState } from "react";

import MoviesList from "./Components/MoviesList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [info, setInfo] = useState({
    id: "287947",
    title: "Shazam!",
    poster: "https://image.tmdb.org/t/p/w500/xnopI5Xtky18MPhK40cZAGAOVeV.jpg",
    overview:
      "A boy is given the ability to become an adult superhero in times of need with a single magic word.",
    release_date: 1553299200,
    genres: ["Action", "Comedy", "Fantasy"],
  });

  return (
    <div className=" myCard bg-primary text-black ">
      <MoviesList setInfo={setInfo} />
    </div>
  );
}

export default App;
