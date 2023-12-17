import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../store/slices/movieSlice";
import seriesReducer from "../store/slices/seriesSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    series: seriesReducer,
  },
});

export default store;