package com.movieList;

import com.movieList.model.Movie;
import com.movieList.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MovieListApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(MovieListApplication.class, args);
	}

	@Autowired
	private MovieRepository movieRepository;
	@Override
	public void run(String... args) throws Exception {

		// Add new movies to the database through movieRepository
		/*
		Movie movie = new Movie();
		movie.setMovieName("Haunted");
		movie.setActor("Bill Hanks");
		movie.setDirector("Jill Dailey");
		movieRepository.save(movie);

		Movie movie2 = new Movie();
		movie2.setMovieName("Shining");
		movie2.setActor("Bill Lamber");
		movie2.setDirector("Lebron James");
		movieRepository.save(movie2);
		 */
	}
}
