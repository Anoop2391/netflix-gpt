import { API_OPTIONS } from "../utils/constants";

const useSearchMovies = () => {
  // search movies in tmdb api
  const searchMovies = async (movieName) => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=" +
        encodeURIComponent(movieName.trim()),
      API_OPTIONS,
    );
    const json = await movies.json();
    return json.results;
  };

  return { searchMovies };
};
export default useSearchMovies;
