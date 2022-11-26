import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [sortMethod, setSortMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const searchResult = document.querySelector("#search");
    // if (handleSubmit) {
    //   setInputSearch(searchResult.value);
    // }
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=b841505d98b363145b081a647dacbccd&query=" +
          inputSearch +
          "&language=fr-FR"
      )
      // .then((res) => console.log(res.data.results))
      .then((res) => setMoviesData(res.data.results))
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        }
      });
    e.target.reset();
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/search/movie?api_key=b841505d98b363145b081a647dacbccd&query=" +
  //         inputSearch +
  //         "&language=fr-FR"
  //     )
  //     // .then((res) => console.log(res.data.results));
  //     .then((res) => setMoviesData(res.data.results));
  // }, [inputSearch]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Entrez le titre d'un film..."
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      <div>
        <button id="top" onClick={(e) => setSortMethod(e.target.id)}>
          Top
        </button>
        <button id="flop" onClick={(e) => setSortMethod(e.target.id)}>
          Flop
        </button>
      </div>

      <ul className="card">
        {moviesData
          .sort((a, b) => {
            if (sortMethod === "top") {
              return b.vote_average - a.vote_average;
            } else if (sortMethod === "flop") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card key={movie.id} movie={movie} genrId={movie.genre_ids} />
          ))}
      </ul>
    </div>
  );
};

export default Movies;
