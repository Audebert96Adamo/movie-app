import React, { useState } from "react";
import { genrsData } from "../data/genrsData";

const Card = ({ movie, genrId }) => {
  const [genrs] = useState(genrsData);

  const genrDisplay = () => {
    let arrGenr = [];
    genrs.forEach((ids) => {
      for (let i = 0; i < genrId.length; i++) {
        if (genrId[i] == ids.id) {
          arrGenr.push(ids.name);
          break;
        }
      }
    });
    return arrGenr.map((arrFinal) => <li>{arrFinal}</li>);
  };

  return (
    <div>
      <li className="display-movie">
        <div className="movie-data">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movie.poster_path}
            alt={"Picture of " + movie.title}
            width={230}
          />
          <h3>{movie.title}</h3>
          <p id="reverse">{movie.release_date}</p>
          <p>{movie.vote_average}/10</p>
          <ul className="mvGenr">Genr :{genrDisplay()}</ul>
          {/* <ul>{movie.genre_ids ? genrDisplay() : null}</ul> */}
          <p>Synopsis : {movie.overview}</p>
        </div>
      </li>
    </div>
  );
};

export default Card;
