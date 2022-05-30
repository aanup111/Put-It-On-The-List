import React, {useState, useEffect} from 'react'
import movieApi from '../api/movieApi'
import {useNavigate, useParams} from 'react-router-dom'


const AddMovie = () => {
  const [movieName, setmovieName] = useState("")
  const [director, setDirector] = useState("")
  const [actor, setActor] = useState("")
  const navigate = useNavigate();
  // To store id from URL
  const {id} = useParams();
  
  const saveOrUpdateMovie = (e) => {
   
    e.preventDefault();

    const movie = {movieName, director, actor};

    if(id){
        movieApi.updateMovie(id, movie).then((response) => {
            navigate('/movies', { replace: true })
        }).catch(error => {
            console.log(error);
        })                
    } else{
        movieApi.createMovie(movie).then((response) => {
            console.log(response.data)
            
            //navigatge to list movies page after button is clicked
            navigate('/movies', { replace: true })
        }).catch(error => {
            console.log(error)
        })
      }
    }

  // updating movie based on movie ID
  useEffect(() => {    
    movieApi.getMovieById(id).then((response) => {
        setmovieName(response.data.movieName)
        setDirector(response.data.director)
        setActor(response.data.actor)
    }).catch(error =>{
        console.log(error)
    }) 
  },[])
  
  const title = () => {

     if(id) {
         return <h2 className = "text-center">Update Movie YES</h2>
     } else{
        return <h2 className = "text-center">Add New Movie To List</h2>
     }
  }
    return (
        <div>
        <h1>{title()}</h1>
        <div className ="card-body">
            <form>
                <div className = "form-group">
                    <label className = "form-label">Movie Name: </label>
                    <input
                        type = "text"
                        placeholder = "Enter Movie Name"
                        name = "movieName"
                        className="form-control"
                        value = {movieName}
                        onChange = {(e) => setmovieName(e.target.value)}
                    >
                    </input>

                    <label className = "form-label">Director: </label>
                    <input
                        type = "text"
                        placeholder = "Enter Director"
                        name = "director"
                        className="form-control"
                        value = {director}
                        onChange = {(e) => setDirector(e.target.value)}
                    >
                    </input>

                    <label className = "form-label">Actor: </label>
                    <input
                        type = "text"
                        placeholder = "Enter Actor"
                        name = "actor"
                        className="form-control"
                        value = {actor}
                        onChange = {(e) => setActor(e.target.value)}
                    >
                    </input>
                </div><br></br>
                <button className = "btn btn-success" onClick={(e) => saveOrUpdateMovie(e)}>Add</button>
            </form>

        </div>
    </div>
   
  )
}

export default AddMovie