import React, { useContext, useState } from 'react'
import Header from "../pages/Header";
import { MainContext } from '../context';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import "../sass/favorite.css"
import bg from "../sass/fixedBg.module.css";


function FavoriteMovie() {
  let {change,favList , setFavList} = useContext(MainContext);
  const [showsInfo, setShowsInfo] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const base_URL = "https://image.tmdb.org/t/p/original";

  const changeFavIcon = (val) => {
    const newFav = favList[val];
    console.log(favList.length)
    const index = favList.findIndex((fav) => fav.id === newFav.id);
    // console.log(index)
    if (index !== -1) {
      const newFavList = [...favList]
      newFavList.splice(index, 1);
      setFavList(newFavList)
    } 
}

const filteredWordsFavList = favList.filter((word) =>
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

// const changeColor = (e) => {
//   if(e.target.style.fill === "red"){
//     e.target.style.fill = "white"
//   }else if(e.target.style.fill === "white"){
//     e.target.style.fill = "red"
//   }else if(e.target.style.fill === ""){
//     e.target.style.fill = "white";
//   }
// }

  return (
    <>
      <Header />
      <div className={selectedPhoto === null ? "" : bg.fixedBg}>
      <div className="favoriteContainer">
      <div className="favoriteWrapper">
        <h1>Favorite Movie</h1>
        <div className="favorite">
          {filteredWordsFavList.map((movie, index) => (
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
                <AiFillHeart style={{fill:"red"}}   className={`heartFill  heart${index}`} />
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
    </div>
    </>
  )
}

export default FavoriteMovie