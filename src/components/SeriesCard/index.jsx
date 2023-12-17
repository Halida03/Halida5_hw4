import React from 'react';
import '../MovieCard/movie.scss';
import user from '../../assets/user.png'

const SeriesCard = () => {
  // const { Title, Year, Poster } = series;

  return (
    <div className='seriesCard'>
        <img src={user} alt="hbvfdh" />
        <div className='title-year-series'>
          <p>Title</p>
          <p>Year</p>
        </div>
    </div>
  );
};

export default SeriesCard;