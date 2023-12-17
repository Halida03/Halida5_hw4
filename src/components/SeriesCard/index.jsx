import React from 'react';
import '../MovieCard/movie.scss';

const SeriesCard = ({ series }) => {
  const { Title, Year, Poster } = series;

  return (
    <div className='movieCard'>
      <img src={Poster} alt={Title} />
      <div className='title-year'>
        <p>{Title}</p>
        <p>{Year}</p>
      </div>
    </div>
  );
};


export default SeriesCard;
