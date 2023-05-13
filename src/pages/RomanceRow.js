import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../sass/romance.css";
import { MainContext, useContext } from "../context";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function RomanceRow({
  title,
  fetchURL,
  selectedPhoto,
  setSelectedPhoto,
}) {
  const [romanceMovie, setRomanceMovie] = useState([]);
  const base_URL = "https://image.tmdb.org/t/p/original";
  const [showsInfo, setShowsInfo] = useState(false);
  let { change,favList,setIsLoading} = useContext(MainContext);
  const [indexFav] = useState([]);


  useEffect(() => {
    const fetchRom = async () => {
      const movies = await axios.get(fetchURL);
      setRomanceMovie(movies.data.results);
      setIsLoading(false)
    };
    fetchRom();
  },[fetchURL]);

  const changeFavIcon = (val) => {
    const newFav = romanceMovie[val];
    console.log(romanceMovie[val])

    const index = favList.findIndex((fav) => fav.id === newFav.id);
    // console.log(index)
    if (index !== -1) {
      favList.splice(index, 1);
      console.log(indexFav)
    } else {
      favList.push(newFav);
      // indexFav.splice(val,index)
      console.log(indexFav)
    }
}

    const changeColor = (e) => {
      if(e.target.style.fill === "white"){
        e.target.style.fill = "red"
      }else if(e.target.style.fill === "red"){
        e.target.style.fill = "white"
      }else if(e.target.style.fill === ""){
        e.target.style.fill = "red";
      }
    }

  const filteredWordsRomance = romanceMovie.filter((word) =>
    word.original_title.toLowerCase().includes(change)
  );

  const showInfo = (key) => {
    setShowsInfo(true);
    setSelectedPhoto(key);
    // console.log(key)
  };

  const closeMovieInfo = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="romanceRowContainer">
      <div className="romanceRowWrapper">
        <h1>{title}</h1>
        <div className="romance">
          {filteredWordsRomance.map((movie, index) => (
            <div className="movie" key={index}>
              <div className="image">
                <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
                <div
                  className="absoluteRomance"
                  onClick={() => showInfo(index + 1)}
                >
                  {selectedPhoto === null ? <BsFillInfoCircleFill /> : ""}
                </div>
                <div className="absoluteFavorite" onClick={() => changeFavIcon(index)}>
                <AiFillHeart style={{fill:"#fff"}}   className={`heartFill  heart${index}`} onClick={(e) => changeColor(e)}/>
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
                        <FaTimes
                          onClick={closeMovieInfo}
                          style={{ cursor: "pointer" }}
                        />
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
  );
}

export default RomanceRow;