import React, { useEffect, useState } from "react";
import axios from "../axios";

function ActionRow({ fetchURL, title }) {
  const [action, setAction] = useState([]);

  useEffect(() => {
    async function fetchAct() {
      const actReq = await axios.get(fetchURL);
      setAction(actReq.data.results);
    }
    fetchAct();
  }, [fetchURL]);

  const base_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="moviesRowContainer">
      <div className="moviesRowWrapper">
        <h1>{title}</h1>
        <div className="movies">
          {action.map((movie, index) => (
            <div key={index} className="movie">
              <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ActionRow;
