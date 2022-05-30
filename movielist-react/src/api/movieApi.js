import axios from 'axios'

// Rest API base url for all API calls
const MOVIES_BASE_API_URL = 'http://localhost:8080/api/v1/movies'

class MovieApi {
    getAllMovies(){
        return axios.get(MOVIES_BASE_API_URL)
    }

    createMovie(movie){
        return axios.post(MOVIES_BASE_API_URL, movie)
    }

    getMovieById(movieId){
        return axios.get(MOVIES_BASE_API_URL + '/' + movieId)
    }

    updateMovie(movieId, movie){
        return axios.put(MOVIES_BASE_API_URL + '/' + movieId, movie);
    }

    deleteMovie(movieId){
        return axios.delete(MOVIES_BASE_API_URL + '/' + movieId)
    }
}

export default new MovieApi();