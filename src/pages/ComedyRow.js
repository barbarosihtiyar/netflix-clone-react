import React, { useEffect, useState } from 'react'
import "../sass/comedy.css"
import axios from "../axios"

function ComedyRow({title,fetchURL}) {
  const [comedy,setComedy] = useState([]);

  useEffect(() => {
    async function fetchCom(){
      const comedyReq = await axios.get(fetchURL);
      setComedy(comedyReq.data.results);
      }
      fetchCom();
    },[fetchURL])

    const base_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className='comedyRowContainer'>
        <div className="comedyRowWrapper">
          <h1>{title}</h1>
          <div className="comedy">
            {comedy.map((movie,index) => (
              <div key={index} className="movie">
              <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
              </div>
            ))}
          </div>
        </div>
        </div>
  )
}

export default ComedyRow