import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../../common/api/movieApi";

const initialState = {
  movies: [],
  shows: [],
  movieInfo: {},
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export const fetchMoviesAsync = () => async (dispatch) => {
  try {
    const moviesResponse = await fetchMovies("Spider-Man");
    const movies = moviesResponse || [];
    console.log("Movies fetched:", movies);
    dispatch(setMovies(movies));
  } catch (error) {
    console.error("Error fetching movies asynchronously:", error);
  }
};


export default movieSlice.reducer;
export const { setMovies } = movieSlice.actions;
