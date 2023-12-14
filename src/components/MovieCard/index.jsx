import React from 'react';
import '../MovieCard/movie.scss';

const MovieCard = ({ movie }) => {
  return (
    <div className='movieCard'>
      <img src={movie.Poster} alt={movie.title} />
      <div className='title-year'>
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
