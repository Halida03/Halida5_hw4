import React from 'react';
import '../MovieCard/movie.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const { Title, Year, Poster, imdbID } = movie;

  return (
    <div className='movieCard'>
      <Link to={`/movie/${imdbID}`}>
        <img src={Poster} alt={Title} />
        <div className='title-year'>
          <p>{Title}</p>
          <p>{Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
