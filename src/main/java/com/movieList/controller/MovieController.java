package com.movieList.controller;

import com.movieList.exception.ResourceNotFoundException;
import com.movieList.model.Movie;
import com.movieList.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Allow access to this endpoint from any host
@CrossOrigin("*")
// Rest API Class
@RestController
@RequestMapping("/api/v1/movies")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

@GetMapping
private List<Movie> getAllMovies(){
    return movieRepository.findAll();
}

// built create movies REST API
@PostMapping //annotation for creating resource
public Movie createMovie (@RequestBody Movie movie) {
    return movieRepository.save(movie);
}


// get movie by id REST API

@GetMapping("{id}")
public ResponseEntity<Movie> getMovieById(@PathVariable long id ){
    Movie movie = movieRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Movie with id: " + id + " does not exist"));
    return ResponseEntity.ok(movie);
}

// update movie REST API
    //annotation for updating resource
@PutMapping("{id}")
public ResponseEntity<Movie> updateMovie(@PathVariable long id, @RequestBody Movie movieDetails){
    Movie updatedMovie = movieRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Movie with id: " + id + " does not exist"));
    updatedMovie.setMovieName(movieDetails.getMovieName());
    updatedMovie.setDirector(movieDetails.getDirector());
    updatedMovie.setActor(movieDetails.getActor());
    updatedMovie.setRating(movieDetails.getRating());
    updatedMovie.setComments(movieDetails.getComments());

    movieRepository.save(updatedMovie);
    return ResponseEntity.ok(updatedMovie);
}

// delete movie REST API

    @DeleteMapping("{id}")
public ResponseEntity<HttpStatus> deleteMovie(@PathVariable long id){

    Movie movie = movieRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Movie with id: " + id + " does not exist"));

    movieRepository.delete(movie);

    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
}

}