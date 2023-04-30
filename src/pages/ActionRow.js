import React, { useEffect, useState } from "react";
import axios from "../axios";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { AiTwotoneLike } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { MainContext, useContext } from "../context";

function ActionRow({ fetchURL, title, selectedPhoto, setSelectedPhoto,setIsLoading,isLoading }) {
  const [action, setAction] = useState([]);
  const [showsInfo, setShowsInfo] = useState(false);
  let { change, setChange } = useContext(MainContext);

  useEffect(() => {
    async function fetchAct() {
      const actReq = await axios.get(fetchURL);
      setAction(actReq.data.results);
      // console.log(actReq.data.results);
    }
    fetchAct();
    setIsLoading(false)
  }, [fetchURL]);

useEffect(() => {
  window.addEventListener('beforeunload', function(){
    setIsLoading(true)
  });
})

  const showInfo = (key) => {
    setShowsInfo(true);
    setSelectedPhoto(key);
    // console.log(key)
  };

  const closeMovieInfo = () => {
    setSelectedPhoto(null);
  };

  const filteredWordsAction = action.filter((word) =>
    word.original_title.toLowerCase().includes(change)
  );

  const base_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="moviesRowContainer">
      <div className="moviesRowWrapper">
        <h1>{title}</h1>
        <div className="movies">
          {filteredWordsAction.map((movie, index) => (
            <div key={index} className="movie">
              <div className="image">
                <img
                  className={index}
                  src={`${base_URL}${movie.poster_path}`}
                  alt={movie.name}
                />
                <div
                  key={index + 1}
                  className="absoluteAction"
                  style={{ display: "absolute" }}
                  onClick={() => showInfo(index + 1)}
                >
                  {selectedPhoto === null ? <BsFillInfoCircleFill /> : ""}
                </div>
                <div className="favMovie">
                  <AiOutlineHeart />
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
                        <FaTimes onClick={closeMovieInfo} />
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

export default ActionRow;
