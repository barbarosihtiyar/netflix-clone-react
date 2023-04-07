import React, { useEffect, useState } from 'react'
import axios from "../axios"
import "../sass/romance.css"
import { MainContext, useContext } from "../context";
import { BsFillInfoCircleFill } from 'react-icons/bs';


function RomanceRow({title,fetchURL}) {
  const [romanceMovie,setRomanceMovie] = useState([]);
  const base_URL = "https://image.tmdb.org/t/p/original";
  let {change,setChange} = useContext(MainContext);
  const [showsInfo,setShowsInfo] = useState(false)

  useEffect(() => {
    const fetchRom = async () => {
      const movies = await axios.get(fetchURL)
      setRomanceMovie(movies.data.results);
    }
    fetchRom();
    })

    const filteredWordsRomance = romanceMovie.filter(word => word.original_title.toLowerCase().includes(change))

    const showInfo = (e) => {
      setShowsInfo(true);
    }

  return (
    <div className="romanceRowContainer">
    <div className="romanceRowWrapper">
    <h1>{title}</h1>
      <div className="romance">
      {filteredWordsRomance.map((movie,index) => (
        <div className="movie" key={index}>
        <div className="image">
        <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
        <div className="absoluteRomance" onClick={showInfo}>
                <BsFillInfoCircleFill/>
              </div>
        </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  )
}

export default RomanceRow