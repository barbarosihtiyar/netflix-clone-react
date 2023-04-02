import React, { useEffect, useState } from 'react'
import "../sass/comedy.css"
import axios from "../axios"
import { MainContext, useContext } from "../context";
import { BsFillInfoCircleFill } from 'react-icons/bs';

function ComedyRow({title,fetchURL}) {
  const [comedy,setComedy] = useState([]);
  const [showsInfo,setShowsInfo] = useState(false)
  let {change,setChange} = useContext(MainContext);

  const filteredWordsComedy = comedy.filter(word => word.original_title.toLowerCase().includes(change))

  const showInfo = (e) => {
    setShowsInfo(true);
  }

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
            {filteredWordsComedy.map((movie,index) => (
              <div key={index} className="movie">
              <div className="image">
              <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
               <div className="absoluteComedy" onClick={showInfo}>
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

export default ComedyRow