import React, {useState, useEffect} from 'react'
import movieApi from '../api/movieApi'
import {useNavigate, useParams} from 'react-router-dom'


const AddMovie = () => {
  const [movieName, setmovieName] = useState("")
  const [anupRating, setAnupRating] = useState("")
  const [movieYear, setMovieYear] = useState("")
  const [sydneyRating, setSydneyRating] = useState("")
  const [comments, setComments] = useState("")
  const navigate = useNavigate();
  // To store id from URL
  const {id} = useParams();
  
  const saveOrUpdateMovie = (e) => {
   
    e.preventDefault();

    const movie = {movieName, anupRating, movieYear, sydneyRating, comments};

    if(id){
        movieApi.updateMovie(id, movie).then((response) => {
            navigate('/movies', { replace: true })
        }).catch(error => {
            console.log(error);
        })                
    } else{
        movieApi.createMovie(movie).then((response) => {
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
        setAnupRating(response.data.anupRating)
        setMovieYear(response.data.movieYear)
        setSydneyRating(response.data.sydneyRating)
        setComments(response.data.comments)
    }).catch(error =>{
        console.log(error)
    }) 
  },[])
  
  const title = () => {

     if(id) {
         return <h2 className = "text-center">Update Movie</h2>
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

                    <label className = "form-label">Anup Rating: </label>
                    <input
                        type = "text"
                        placeholder = "Enter IMDB Rating"
                        name = "director"
                        className="form-control"
                        value = {anupRating}
                        onChange = {(e) => setAnupRating(e.target.value)}
                    >
                    </input>

                    <label className = "form-label">Movie Year: </label>
                    <input
                        type = "text"
                        placeholder = "Enter Movie Description"
                        name = "actor"
                        className="form-control"
                        value = {movieYear}
                        onChange = {(e) => setMovieYear(e.target.value)}
                    >
                    </input>
                    <label className = "form-label">Sydney Rating: </label>
                    <input
                        type = "text"
                        placeholder = "Enter Your Rating"
                        name = "rating"
                        className="form-control"
                        value = {sydneyRating}
                        onChange = {(e) => setSydneyRating(e.target.value)}
                    >
                    </input>
                    <label className = "form-label">Comments: </label>
                    <input
                        type = "text"
                        placeholder = "Enter Comments"
                        name = "comments"
                        className="form-control"
                        value = {comments}
                        onChange = {(e) => setComments(e.target.value)}
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