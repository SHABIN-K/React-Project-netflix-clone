import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { image_URL } from '../../Constants/Constants'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err =>{
      alert('Please Wait a Few Minutes Before You Try Again')
    })
  }, [])
  
  return (
    <div className='rowspost'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((moviePoster,index) => 
            <img key={index} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${image_URL+moviePoster.backdrop_path}`} alt="posters" />
          )}
        </div>
    </div>
  )
}

export default RowPost