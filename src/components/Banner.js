import React, { useState,useEffect } from 'react'
import '../sass/banner.css'
import axios from '../axios'
import requests from '../requests'

function Banner() {
    const [mainMovie,setMainMovie] = useState([]);

    useEffect(() => {

        async function mainReq(){
            const mainRequest = await axios.get(requests.fetchTrending)
            setMainMovie(mainRequest.data.results);
        }
        mainReq();
    }, [setMainMovie])
    
    let banner = mainMovie[Math.floor(Math.random() * 20) + 1]
    const image_URL ="https://image.tmdb.org/t/p/original";


  return (
    <div className='bannerContainer'>
        <div className="bannerWrapper">
            <div className="bannerImage">
                 <img src={`${image_URL}${banner.backdrop_path}`} alt={`${banner.name}`}/>
            </div>
        </div>
    </div>
  )
}

export default Banner