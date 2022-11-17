import './Banner.css'
import axios from '../../axios'
import { useEffect, useState } from 'react'
import { API_KEY, image_URL } from '../../Constants/Constants'



function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() =>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
          const results = response.data.results ;
          const newIndex = Math.floor(Math.random() * results.length) ;
          setMovie(results[newIndex])
    })
  }, [])
  return (
    <div style={{ backgroundImage: `url(${movie ? image_URL+movie.backdrop_path : ""})` }} className='banner'>
        <div className="content">
            <h1 className="title">{movie ? movie.original_title : ""}</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom">
        </div>
    </div>
  )
}

export default Banner