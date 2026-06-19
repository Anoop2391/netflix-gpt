import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

 const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  // Fetch now playing movies from TMDB API and dispatch them to the store.
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US', options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  // Fetch now playing movies from TMDB API and dispatch them to the store.
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;