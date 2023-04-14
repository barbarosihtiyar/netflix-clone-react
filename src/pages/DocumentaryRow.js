import axios from '../axios'
import React, { useEffect, useState } from 'react'
import "../sass/documentaries.css"
import { MainContext, useContext } from "../context";
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaTimes } from "react-icons/fa";


function DocumentaryRow({title,fetchURL,selectedPhoto, setSelectedPhoto}) {
    const [docMovie,setDocMovie] = useState([])
    const [showsInfo,setShowsInfo] = useState(false)
    let {change,setChange} = useContext(MainContext);


    useEffect(() => {
        const fetchDoc = async () => {
            const docMovies = await axios.get(fetchURL)
            setDocMovie(docMovies.data.results)
        }
        fetchDoc();
        })


        const base_URL = "https://image.tmdb.org/t/p/original";

        const filteredWordsDocumentary = docMovie.filter(word => word.original_title.toLowerCase().includes(change))

        const showInfo = (key) => {
            setShowsInfo(true);
            setSelectedPhoto(key);
            // console.log(key)
          };
        
          const closeMovieInfo = () => {
            setSelectedPhoto(null);
          };        

  return (
    <div className='documentaryRowContainer'>
        <div className="documentaryRowWrapper">
        <h1>{title}</h1>
            <div className="documentary">
            {filteredWordsDocumentary.map((movie,index) => (
                <div className="movie" key={index}>
                <div className="image">
                    <img src={`${base_URL}${movie.poster_path}`}  alt={movie.name} />
                    <div className="absoluteDocumentary" onClick={() => showInfo(index+1)}>
                    {selectedPhoto === null ? <BsFillInfoCircleFill /> : ""}
              </div>
                </div>
                {selectedPhoto && (
                <div
                  className="clickPopup"
                  style={showsInfo ? { display: "block" } : { display: "none" }}
                >
                  <div className="clickPopupContainer">
                    <div className="clickPopupWrapper">
                      <div className="clickPopupImage">
                        {selectedPhoto === index + 1 ? (
                          <img
                            className={index + 1}
                            src={`${base_URL}${movie.backdrop_path}`}
                            alt={movie.name}
                          />
                        ) : (
                          ""
                        )}
                        <FaTimes onClick={closeMovieInfo} style={{cursor:"pointer"}} />
                      </div>
                      <div className="clickPopupTitleContent">
                        <div className="clickPopupTitle">
                          {selectedPhoto === index + 1 ? (
                            <h1>{movie.title}</h1>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="clickPopupContent">
                          {selectedPhoto === index + 1 ? (
                            <span>
                              Language : {movie.original_language.toUpperCase()}
                            </span>
                          ) : (
                            ""
                          )}
                          {selectedPhoto === index + 1 ? (
                            <span>Release Date : {movie.release_date}</span>
                          ) : (
                            ""
                          )}
                          {selectedPhoto === index + 1 ? (
                            <span>Vote Average : {movie.vote_average}</span>
                          ) : (
                            ""
                          )}
                          {selectedPhoto === index + 1 ? (
                            <span>
                              Number of people voting : {movie.vote_count}
                            </span>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="clickPopupSum">
                          {selectedPhoto === index + 1 ? (
                            <p>{movie.overview}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default DocumentaryRowP