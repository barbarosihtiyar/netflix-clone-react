import React, { useEffect, useState } from 'react'
import "../sass/horror.css"
import axios from "../axios"
import { MainContext, useContext } from "../context";
import { BsFillInfoCircleFill } from 'react-icons/bs';


function HorrorRow({title,fetchURL}) {
  const [horror,setHorror] = useState([])
  let {change,setChange} = useContext(MainContext);
  const [showsInfo,setShowsInfo] = useState(false)


  useEffect(() => {
    const fetchHor = async () => {
      const horrorMovies = await axios.get(fetchURL)
      setHorror(horrorMovies.data.results)
    }
    fetchHor()
    console.log(horror)
  },[])
  const base_URL = "https://image.tmdb.org/t/p/original";

  const filteredWordsHorror = horror.filter(word => word.original_title.toLowerCase().includes(change))

  const showInfo = (e) => {
    setShowsInfo(true);
  }


  
  return (
    <div className="horrorRowContainer">
        <div className="horrorRowWrapper">
            <h1>{title}</h1>
            <div className="horror">
            {filteredWordsHorror.map((movie,index) => (
              <div className="movie" key={index}>
              <div className="image">
                <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
                <div className="absoluteHorror" onClick={showInfo}>
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

export default HorrorRow