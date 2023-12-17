import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import SeriesCard from '../SeriesCard';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../store/slices/movieSlice';
import { getTVSeries } from '../../store/slices/seriesSlice';
import '../MovieListing/movieListing.scss';

const MovieListing = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState('movies');

  const { movies, status: movieStatus } = useSelector((state) => state.movie || { movies: [], status: 'loading' });
  const { shows, status: seriesStatus } = useSelector((state) => state.series || { shows: [], status: 'loading' });

  useEffect(() => {
    if (activeCategory === 'movies') {
      dispatch(getMovies());
    } else {
      dispatch(getTVSeries());
    }
  }, [dispatch, activeCategory]);

  return (
    <div className='movieListing'>
      <div className="section-buttons">
        <h2 onClick={() => setActiveCategory('movies')}>Movies</h2>
        <h2 onClick={() => setActiveCategory('series')}>Shows</h2>
      </div>
      <div className="content">
        {activeCategory === 'movies' && (
          <>
            {movieStatus === 'loading' && <p>Loading movies...</p>}
            {movieStatus === 'error' && <p>Error loading movies.</p>}
            {movieStatus === 'success' && movies.Search && Array.isArray(movies.Search) && (
              <div className="movie-container">
                {movies.Search.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            )}
          </>
        )}

{activeCategory === 'series' && (
  <>
    {seriesStatus === 'loading' && <p>Loading shows...</p>}
    {seriesStatus === 'error' && <p>Error loading shows.</p>}
    {seriesStatus === 'success' && shows && Array.isArray(shows) && (
      <div className="show-container">
        <SeriesCard/>
      </div>
    )}
  </>
)}

      </div>
    </div>
  );
};

export default MovieListing;
