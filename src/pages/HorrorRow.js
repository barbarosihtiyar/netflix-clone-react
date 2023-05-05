import React, { useEffect, useState } from "react";
import "../sass/horror.css";
import axios from "../axios";
import { MainContext, useContext } from "../context";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

function HorrorRow({ title, fetchURL, selectedPhoto, setSelectedPhoto,setIsLoading,isLoading }) {
  const [horror, setHorror] = useState([]);
  let { change, setChange , favList , setFavList} = useContext(MainContext);
  const [indexFav,setIndexFav] = useState([]);
  const [showsInfo, setShowsInfo] = useState(false);

  useEffect(() => {
    const fetchHor = async () => {
      const horrorMovies = await axios.get(fetchURL);
      setHorror(horrorMovies.data.results);
    };
    fetchHor();
    console.log(horror);
  }, []);

  const changeFavIcon = (val) => {
    const newFav = horror[val];
    console.log(horror[val])

    const index = favList.findIndex((fav) => fav.id === newFav.id);
    // console.log(index)
    if (index !== -1) {
      favList.splice(index, 1);
      // indexFav.push({
      //   index:val,
      //   val:true
      // })
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

  useEffect(() => {
    window.addEventListener('beforeunload', function(){
      setIsLoading(true)
    });
  })

  const base_URL = "https://image.tmdb.org/t/p/original";

  const filteredWordsHorror = horror.filter((word) =>
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
    <div className="horrorRowContainer">
      <div className="horrorRowWrapper">
        <h1>{title}</h1>
        <div className="horror">
          {filteredWordsHorror.map((movie, index) => (
            <div className="movie" key={index}>
              <div className="image">
                <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
                <div
                  className="absoluteHorror"
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

export default HorrorRow;
