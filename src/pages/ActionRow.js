





import React, { useEffect, useState } from "react";
import axios from "../axios";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { AiTwotoneLike } from "react-icons/ai";
import { MainContext, useContext } from "../context";


function ActionRow({ fetchURL, title }) {
const [action, setAction] = useState([]);
const [showsInfo,setShowsInfo] = useState(false)
let {change,setChange} = useContext(MainContext);
const [selectedPhoto,setSelectedPhoto] = useState(null)

useEffect(() => {
  async function fetchAct() {
    const actReq = await axios.get(fetchURL);
    setAction(actReq.data.results);
    console.log(actReq.data.results)
  }
  fetchAct();
}, [fetchURL]);

const showInfo = (key) => {
  setShowsInfo(!showsInfo);
  setSelectedPhoto(key)
  console.log(key)
}

const filteredWordsAction = action.filter(word => word.original_title.toLowerCase().includes(change))


const base_URL = "https://image.tmdb.org/t/p/original";

return (
  <div className="moviesRowContainer">
    <div className="moviesRowWrapper">
      <h1>{title}</h1>
      <div className="movies">
        {filteredWordsAction.map((movie, index) => (
          <div key={index} className="movie">
          <div className="image" >
          <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
          <div key={index+1}  className="absoluteAction" onClick={() => showInfo(index+1)}>
              <BsFillInfoCircleFill/>
            </div>
          </div>
          {selectedPhoto &&(
            <div className="clickPopup" style={showsInfo ? {display:"block"} : {display : "none"}}>
            <div className="clickPopupContainer">
              <div className="clickPopupWrapper">
                <div className="clickPopupImage">
                <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
                </div>
                <div className="clickPopupTitleContent">
                  <div className="clickPopupTitle">
                  <h1>{movie.title}</h1>
                  </div>
                  <div className="clickPopupContent">
                    <span>Language : {movie.original_language}</span>
                    <span>Release Date : {movie.release_date}</span>
                    <span>Vote Average : {movie.vote_average}</span>
                    <span>Number of people voting : {movie.vote_count}</span>
                  </div>
                  <div className="clickPopupSum">
                    <p>{movie.overview}</p>
                  </div>
                </div>
                div.
              </div>
            </div>
            </div>
          )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

export default ActionRow;