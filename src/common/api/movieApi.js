import axios from "axios";
export const baseURL = "http://www.omdbapi.com";
const movieApi = axios.create({
  baseURL,
});

export const fetchMovies = async (searchQuery) => {
  try {
    const response = await movieApi.get("/", {
      params: {
        apikey: "5afe38e6",
        s: searchQuery,
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
