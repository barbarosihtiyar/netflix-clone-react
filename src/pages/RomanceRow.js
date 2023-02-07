import React, { useEffect, useState } from 'react'
import axios from "../axios"
import "../sass/romance.css"

function RomanceRow({title,fetchURL}) {
  const [romanceMovie,setRomanceMovie] = useState([]);
  const base_URL = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    const fetchRom = async () => {
      const movies = await axios.get(fetchURL)
      setRomanceMovie(movies.data.results);
    }
    fetchRom();
    })
  return (
    <div className="romanceRowContainer">
    <div className="romanceRowWrapper">
    <h1>{title}</h1>
      <div className="romance">
      {romanceMovie.map((movie,index) => (
        <div className="movie" key={index}>
          <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
        </div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default RomanceRow