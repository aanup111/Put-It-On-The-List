package com.movieList.repository;

import com.movieList.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    // CRUD methods to interact with database


}
