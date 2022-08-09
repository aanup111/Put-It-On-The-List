import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import movieApi from '../api/movieApi'




const ListMovies = () => {
const [movies, setMovies] = useState([])


// get list of movies from API/DB and pass to movies STATE
useEffect(() => { 
    getMovieList()
}, [])


const deleteMovie = (movieId) =>{   
    movieApi.deleteMovie(movieId).then((response) => {
        getMovieList();
    }).catch(error => {
        console.log(error);
    })
}

const getMovieList = () => {
    movieApi.getAllMovies().then((response) =>{
        setMovies(response.data)
    }).catch(error => {
        console.log(error)
    })
}


  return (
    <div className='container'>
        <h2 className='text-center'>Put It On The List</h2>
        <Link to ="/add-movie" className = "btn btn-primary mb-2">Add Movie</Link>
        <Link to ="/search-movies" className = "btn btn-primary mb-2" style ={{marginLeft:"10px"}}>Search Movie</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Movie Name</th>
                <th>Movie Director</th>
                <th>Movie Actor</th> 
                <th>Movie Rating</th> 
                <th>Movie Comments</th> 
                <th>Actions</th> 
            </thead>
            <tbody>
                {
                    movies.map(
                        movie =>
                        <tr key= {movie.id}>
                             <td>{movie.movieName}</td>
                             <td>{movie.director}</td>
                             <td>{movie.actor}</td>
                             <td>{movie.rating}</td>
                             <td>{movie.comments}</td>
                             <td>
                              <Link className='btn btn-info' to={`/edit-movie/${movie.id}`} 
                              >Update</Link>  
                              <button 
                              className='btn btn-danger' onClick={() => deleteMovie(movie.id)}
                              style ={{marginLeft:"10px"}}> Delete</button>   
                             </td>
                        </tr>
                       
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListMovies