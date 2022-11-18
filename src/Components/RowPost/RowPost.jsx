import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, image_URL } from '../../Constants/Constants'
import YouTube from 'react-youtube'


function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')//youtube url
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err =>{
      alert('Please Wait a Few Minutes Before You Try Again')
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovieTailor = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if (response.data.results.length!==0) {
        setUrlId(response.data.results[0])
      }else{
        console.log('trailor not available');
      }
    })

  }
  
  return (
    <div className='rowspost'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((moviePoster,index) => 
            <img onClick={() =>handleMovieTailor(moviePoster.id) } key={index} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${image_URL+moviePoster.backdrop_path}`} alt="posters" />
          )}
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts}  />}
    </div>
  )
}

export default RowPost