import React from 'react'
import movieApi from '../api/movieApi'
import {useNavigate, useParams} from 'react-router-dom'
const IMG_API = "https://image.tmdb.org/t/p/w1280"



const Movies = ({title, overview, poster_path, vote_average, release_date}) => {
 const ourRating = " ";
 const comments = " ";
 const navigate = useNavigate();
  
 // add movie to list / database

 const addToList = (e) => {
    e.preventDefault();
    const movie = {title, vote_average, overview, ourRating, comments};
    movieApi.createMovie(movie).then((response) => {
      //navigatge to list movies page after button is clicked
      navigate('/movies', { replace: true })
  }).catch(error => {
      console.log(error)
  })
  }
 
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
            <button className = "btn btn-success" onClick={(e) => addToList(e)}>Add To List</button>
         </div>
    </div>
  )
}

export default Movies