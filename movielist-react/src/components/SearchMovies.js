import React, { useEffect, useState } from 'react'
import tmdbApi from '../api/tmdbApi'
import Movies from './Movies'

export const SearchMovies = () => {
  
  
const [tmdbMovies, setTmdbMovies] = useState([])
const [searchValue, setSearchValue] = useState([])
 
// get list of movies from TMDB API and pass to movies STATE
useEffect(() => { 
    SearchMovie('Batman')
}, [])
 
const SearchMovie = (movieName) => {
    tmdbApi.searchMovie(movieName).then((response) =>{
        setTmdbMovies(response.data.results)
    }).catch(error => {
        console.log(error)
    })
} 

const handleOnSubmit = (e) => {
    e.preventDefault()
    SearchMovie(searchValue)

}

const handleOnChange = (e) => {
    setSearchValue(e.target.value)

}

const addToList = (e) => {
    e.preventDefault();
     //const movie = {e.value, e.vote_average, overview, sydneyRating, comments};
     console.log(e);
    /* movieApi.createMovie(movie).then((response) => {
      navigatge to list movies page after button is clicked
      navigate('/movies', { replace: true })
  }).catch(error => {
      console.log(error)
  })*/
  } 
  
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
            <header>
                        <input className="search" type="text" placeholder="Search..."
                            value={searchValue}
                            onChange={handleOnChange}
                        >
                        </input>
                    </header>
            </form>
                    
                   
                   <div className ="movie-container">
                    {
                        tmdbMovies.length > 0 && 
                        tmdbMovies.map((movie) => 
                        <Movies key={movie.id} {...movie}  
                        />
                       
                        )     
                  
                    }
 
           
           </div>
        </div>
  )
}

export default SearchMovies


