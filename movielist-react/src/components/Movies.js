import React from 'react'
const IMG_API = "https://image.tmdb.org/t/p/w1280"


const Movies = ({title, overview, poster_path, vote_average, release_date}) => {
  return (
    <div className ="movie">
         
         <img src = {IMG_API + poster_path} alt ={title}></img>
         <div className='movie-info'>
            <h3>{title}</h3>
            <span>{vote_average}</span>
         </div>
         <div className='movie-over'>
            <h2>Description</h2>
            <p>{overview}</p>
         </div>
    </div>
  )
}

export default Movies