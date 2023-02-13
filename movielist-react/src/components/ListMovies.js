import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import movieApi from '../api/movieApi'
import Popup from './Popup'




const ListMovies = () => {
const [movies, setMovies] = useState([])
const [openPopup, setOpenPopup] = useState(false)


// get list of movies from API/DB and pass to movies STATE
useEffect(() => { 
    getMovieList()
}, [])

useEffect(() => { 
    setOpenPopup(true)
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
    <div className='list-container'>
        <Popup open ={openPopup}/>  
        <div className='over-container'>
        <h2 className='text-center'>Put It On The List</h2>
        
        <Link to ="/add-movie" className = "btn btn-primary mb-2">Add Movie</Link>
        <Link to ="/search-movies" className = "btn btn-primary mb-2" style ={{marginLeft:"10px"}}>Search Movie</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Movie Name</th>
                <th>Anup Rating</th> 
                <th>Sydney Rating</th> 
                <th>Movie Year</th> 
                <th>Movie Comments</th> 
                <th>Actions</th> 
            </thead>
            <tbody>
                {
                    movies.map(
                        movie =>
                        <tr key= {movie.id}>
                             <td>{movie.movieName}</td>
                             <td>{movie.anupRating}</td>
                             <td>{movie.sydneyRating}</td>
                             <td>{movie.movieYear}</td>
                             <td>{movie.comments}</td>
                             
                             <td>
                              <Link className='btn btn-info' to={`/edit-movie/${movie.id}`} 
                              >Update</Link>  
                              <button 
                              className='btn btn-danger' onClick={() => deleteMovie(movie.id)}
                              style ={{minWidth:"70px",marginTop:"5px"}}> Delete</button>   
                             </td>
                        </tr>
                       
                    )
                }
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default ListMovies