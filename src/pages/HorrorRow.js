import React, { useEffect, useState } from 'react'
import "../sass/horror.css"
import axios from "../axios"

function HorrorRow({title,fetchURL}) {
  const [horror,setHorror] = useState([])
  useEffect(() => {
    const fetchHor = async () => {
      const horrorMovies = await axios.get(fetchURL)
      setHorror(horrorMovies.data.results)
    }
    fetchHor()
    console.log(horror)
  },[])
  const base_URL = "https://image.tmdb.org/t/p/original";
  
  return (
    <div className="horrorRowContainer">
        <div className="horrorRowWrapper">
            <h1>{title}</h1>
            <div className="horror">
            {horror.map((movie,index) => (
              <div className="movie" key={index}>
                <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
              </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default HorrorRow