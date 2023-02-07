import axios from '../axios'
import React, { useEffect, useState } from 'react'
import "../sass/documentaries.css"

function DocumentaryRow({title,fetchURL}) {
    const [docMovie,setDocMovie] = useState([])

    useEffect(() => {
        const fetchDoc = async () => {
            const docMovies = await axios.get(fetchURL)
            setDocMovie(docMovies.data.results)
        }
        fetchDoc();
        })
        const base_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className='documentaryRowContainer'>
        <div className="documentaryRowWrapper">
        <h1>{title}</h1>
            <div className="documentary">
            {docMovie.map((movie,index) => (
                <div className="movie" key={index}>
                    <img src={`${base_URL}${movie.poster_path}`}  alt={movie.name} />
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default DocumentaryRow