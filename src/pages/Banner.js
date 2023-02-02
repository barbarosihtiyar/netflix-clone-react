import React, { useState,useEffect } from 'react'
import '../sass/banner.css'
import axios from '../axios'
import { FaPlay } from "react-icons/fa";

function Banner({fetchURL}) {
    const [mainMovie,setMainMovie] = useState([]);

    useEffect(() => {

        async function mainReq(){
            const mainRequest = await axios.get(fetchURL)
            setMainMovie(mainRequest.data.results[Math.floor(Math.random() * 20) + 1]);
        }
        mainReq();
    }, [fetchURL])

    
    const image_URL ="https://image.tmdb.org/t/p/original";


  return (
    <div className='bannerContainer'>
        <div className="bannerWrapper">
            <div className="bannerImage">
                 <img src={`${image_URL}${mainMovie.backdrop_path}`} alt={``}/>
                 <div className="bannerDesc">
                    <h1>{`${mainMovie.title}`}</h1>
                    <p>{`${mainMovie.overview}`}</p>
                    <div className="bannerIcons">
                        <FaPlay />
                        <span>Play</span>
                    </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Banner