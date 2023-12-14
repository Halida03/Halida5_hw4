import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesAsync } from '../../store/slices/counterSlice';
import MovieCard from '../MovieCard/index';
import './movieListing.scss';

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchMoviesAsync());
    };

    fetchData();
  }, [dispatch]);

  console.log("Movies in MovieListing component:", movies);

  if (!movies) {
    return null;
  }

  return (
    <div className='movieListing'>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieListing;
