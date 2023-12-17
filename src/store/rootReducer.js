import { combineReducers } from 'redux';
import movieReducer from './slices/movieSlice';
import tvSeriesReducer from './slices/tvSeriesSlice';

const rootReducer = combineReducers({
  movie: movieReducer,
  tvSeries: tvSeriesReducer,
});

export default rootReducer;
