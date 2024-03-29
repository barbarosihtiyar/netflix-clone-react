import React from 'react'
import axios from '../axios'
import { useState,useEffect } from 'react';
import "../sass/Row.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainContext, useContext } from "../context";


function Row({title,fetchURL}) {
  const [movies,setMovies] = useState([]);
  let {change,setChange,setIsLoading} = useContext(MainContext);

  useEffect(() => {

    async function fetchData(){
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      setIsLoading(false)
    }
    fetchData(); 
  },[fetchURL])

  // useEffect(() => {
  //   window.addEventListener('beforeunload', function(){
  //     setIsLoading(true)
  //   });
  // })
  const base_URL = "https://image.tmdb.org/t/p/original";
  


  
  return (
      <div className="moviesContainer">
      <h3>{title}</h3>
        <div className="moviesWrapper">
        <AliceCarousel mouseTracking >
        {movies.map((movie,index) => (
            <div key={index} className="movie">
            <img src={`${base_URL}${movie.poster_path}`} alt={movie.name} />
            </div>
          ))}
        </AliceCarousel>
        </div>
      </div>
  )
}

export default Row