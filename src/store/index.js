import { configureStore, combineReducers } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import seriesReducer from "./slices/seriesSlice";
import searchReducer from "./slices/searchSlice"; 

const rootReducer = combineReducers({
  movie: movieReducer,
  series: seriesReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
