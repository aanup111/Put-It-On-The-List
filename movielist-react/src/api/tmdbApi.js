import axios from 'axios'

// Rest API base url for all API calls
const TMDBMOVIES_BASE_API_URL = 'https://api.themoviedb.org/3/'

class TmdbApi {

    searchMovie(movieName){
        return axios.get(TMDBMOVIES_BASE_API_URL + `search/movie?api_key=8597639f6bfee4ab2a35deb272a5b1a6&query=${movieName}`)
}

}

export default new TmdbApi();